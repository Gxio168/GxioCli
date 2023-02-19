import { ElLoading } from 'element-plus'
import type { ElLoading as loadingType } from 'element-plus'

let loadingInstance: ReturnType<typeof loadingType.service>

// 开始加载
const startLoading = () => {
  loadingInstance = ElLoading.service({
    fullscreen: true,
    lock: true,
    text: 'loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}

// 结束加载
const endLoading = () => {
  loadingInstance.close()
}

// 记录当前需要进行 loading 的请求数量
let curLoadingRequestCount = 0

/**
 * @description 如果发生 api 请求， 则判断请求头是否含有 noLoading
 * 如果不含有则开始计数并显示 loading 样式
 */
export const showFullScreenLoading = () => {
  if (curLoadingRequestCount === 0) {
    startLoading()
  }
  curLoadingRequestCount++
}

/**
 * @description 加载当前页面 api 含有 noLoading 的请求成功后减一， 直到所有请求成功，移除 loading
 */
export const tryHideFullScreenLoading = () => {
  if (curLoadingRequestCount <= 0) return
  curLoadingRequestCount--
  if (curLoadingRequestCount === 0) {
    endLoading()
  }
}
