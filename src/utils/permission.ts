import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { getToken } from '@/utils/token'
import type { NavigationGuardWithThis } from 'vue-router'

// 白名单
const whiteList = ['/login']

export const permission: NavigationGuardWithThis<undefined> = async (to, from, next) => {
  const authStore = useAuthStore()
  const token = getToken()
  // 如果本地存在token
  if (token) {
    // 如果要去的界面是登录界面
    if (to.path === '/login') {
      next('/')
    } else {
      const { name } = storeToRefs(authStore)
      if (name.value) {
        next()
      } else {
        try {
          await authStore.getUserInfo()
          next()
        } catch (error) {
          next('/login')
        }
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
  next()
}
