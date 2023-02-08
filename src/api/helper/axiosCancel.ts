import axios from 'axios'
import type { AxiosRequestConfig, Canceler } from 'axios'

// 当前请求队列
let pendingMap = new Map<string, Canceler>()

export const getPendingUrl = (config: AxiosRequestConfig) => [config.method, config.url].join('&')

export class AxiosCanceler {
  /**
   * @description 添加请求
   * @param config
   */
  addPending(config: AxiosRequestConfig) {
    // 请求前先将上一次请求取消
    this.removePending(config)
    const url = getPendingUrl(config)
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken(cancel => {
        if (!pendingMap.has(url)) {
          pendingMap.set(url, cancel)
        }
      })
  }
  /**
   * @description 移除请求
   * @param config
   */
  removePending(config: AxiosRequestConfig) {
    const url = getPendingUrl(config)
    if (pendingMap.has(url)) {
      // 判断是否存在当前请求，存在则取消请求并移除出 pendingMap
      const cancel = pendingMap.get(url)
      cancel && cancel()
      pendingMap.delete(url)
    }
  }
  /**
   * @description 清空队列
   */
  removeAllPending() {
    pendingMap.forEach(cancel => {
      cancel && cancel()
    })
    pendingMap.clear()
  }
  /**
   * @description 重置
   */
  reset() {
    pendingMap = new Map<string, Canceler>()
  }
}
