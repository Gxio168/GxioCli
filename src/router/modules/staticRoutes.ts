import layout from '@/layout/index.vue'
import type { RouteRecordRaw } from 'vue-router'
import type { unionRoutes } from '../interface'

/**
 *  如果只有唯一孩子，给唯一孩子一个 icon(作为显示图标)
 *  多个孩子， 则给每一个孩子一个图标
 */

export const staticRoutes: Array<unionRoutes> = [
  {
    path: '/login',
    component: () => {
      return import(`@/views/login/index.vue`)
    },
    hidden: true
  },
  {
    path: '/',
    component: layout,
    name: 'Layout',
    redirect: '/dashboard',
    children: []
  }
]

//  404 界面, 用于在添加完成动态路由后添加，保证在最后载入
export const notFoundRoute = {
  path: '/:pathMatch(.*)',
  component: () => import('@/components/NotFound/index.vue'),
  name: 'NotFound',
  hidden: true
} as RouteRecordRaw
