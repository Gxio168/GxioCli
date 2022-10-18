import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { getToken } from '@/utils/token'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/main',
    component: () => import('@/components/main.vue')
  },
  {
    path: '/:productName',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 白名单
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  const  token = getToken()
  // 如果本地存在token
  if (token) {
    // 如果要去的界面是登录界面
    if (to.path === '/login') {
      next('/main')
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
    } else {  // 想去其他界面
      next(`/login?redirect=${to.path}`)
      next('/login')
    }
  }
  next()
})

export default router
