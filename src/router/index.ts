import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { getToken } from '@/utils/token'
import layout from '@/layout/index.vue'

const routes = [
  {
    path: '/login',
    component: () => import(`@/views/login/index.vue`),
    hidden: true
  },
  {
    path: '/',
    component: layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard/index.vue'),
        meta: { title: 'Dashboard', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/example',
    component: layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index.vue'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index.vue'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },
  {
    path: '/form',
    component: layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index.vue'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },
  {
    path: '/:productName',
    component: () => import('@/views/NotFound.vue'),
    hidden: true
  }
] as RouteRecordRaw[]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 白名单
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
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
})

export default router
