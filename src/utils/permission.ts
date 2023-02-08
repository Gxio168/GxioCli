import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/modules/auth'
import { getToken } from '@/utils/token'
import type { NavigationGuardWithThis } from 'vue-router'
import Nprogress from '@/utils/nprogress'
import { AxiosCanceler } from '@/api/helper/axiosCancel'

const axiosCanceler = new AxiosCanceler()

// 白名单
const whiteList = ['/login']

export const permission: NavigationGuardWithThis<undefined> = async (to, from, next) => {
  axiosCanceler.removeAllPending()
  Nprogress.start()
  const authStore = useAuthStore()
  const token = getToken()
  // 如果本地存在token
  if (token) {
    // 如果要去的界面是登录界面
    if (to.path === '/login') {
      next('/')
    } else {
      // 因为在 登录页跳转之前已经获取过 user 的信息， 这里不能光凭借 user 来判断
      const { components, name } = storeToRefs(authStore)
      if (components.value.length && name.value) {
        next()
      } else {
        await authStore.getUserInfo()
        await authStore.getUserRole()
        next({ ...to, replace: true })
      }
    }
  } else {
    // 如果本地没有存储 token, 要去的界面是注册界面
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      // 想去其他界面
      next(`/login?redirect=${to.path}`)
    }
  }
}
