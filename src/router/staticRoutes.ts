import layout from '@/layout/index.vue'
import type { RouteRecordRaw } from 'vue-router'
import type { unionRoutes } from './interface'

/**
 *  如果只有唯一孩子，给唯一孩子一个 icon(作为显示图标)
 *  多个孩子， 则给每一个孩子一个图标
 */

export const staticRoutes: Array<unionRoutes> = [
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
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '首页', icon: 'home-filled' }
      }
    ]
  }
]

//  404 界面, 用于在添加完成动态路由后添加，保证在最后载入
export const NotFound = {
  path: '/:pathMatch(.*)',
  component: () => import('@/views/NotFound.vue'),
  name: 'NotFound',
  hidden: true
} as RouteRecordRaw
