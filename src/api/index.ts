import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

import { getToken, removeToken } from '@/utils/token'
import { AxiosCanceler } from './helper/axiosCancel'
import { ResultEnum } from '@/types'
import type { ResultData } from './interface'

const axiosCanceler = new AxiosCanceler()

const option: AxiosRequestConfig = {
  baseURL: '/api',
  timeout: ResultEnum.TIMEOUT
}

class Request {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // 处理 token
        const token = getToken()
        // 将当前请求添加至 pendingMap
        axiosCanceler.addPending(config)
        if (token) {
          config!.headers!.token = token
        }
        return config
      },
      err => {
        return Promise.reject(err)
      }
    )
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data, config } = response
        // 发送请求成功后移除出 pendingMap
        axiosCanceler.removePending(config)
        if (data.statusCode && data.statusCode === ResultEnum.OVERDUE) {
          // 帐号登录失败
          ElMessage.error(data.message)
          removeToken()
          return Promise.reject(data)
        }
        if (data.statusCode && data.statusCode !== ResultEnum.SUCCESS) {
          // 一般请求失败的情况
          ElMessage.error(data.message)
          return Promise.reject(data)
        }
        return data
      },
      err => {
        return Promise.reject(err)
      }
    )
  }
  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config)
  }
  public get<T>(url: string, config?: AxiosRequestConfig): Promise<ResultData<T>> {
    return this.instance.get(url, config)
  }
  public post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ResultData<T>> {
    return this.instance.post(url, data, config)
  }
  public put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ResultData<T>> {
    return this.instance.put(url, data, config)
  }
  public delete<T>(url: string, config?: AxiosRequestConfig): Promise<ResultData<T>> {
    return this.instance.delete(url, config)
  }
}

export default new Request(option)
