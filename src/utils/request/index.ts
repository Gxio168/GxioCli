import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import type { ResultData } from './interface'
import { getToken } from '@/utils/token'

const option: AxiosRequestConfig = {
  baseURL: '/api',
  timeout: 5000
}

class Request {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // 处理 token
        const token = getToken()
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
      (res: AxiosResponse) => {
        return res.data
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
