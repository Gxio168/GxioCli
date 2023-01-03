import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import layout from '@/layout/index.vue'
import { permission } from '@/utils/permission'


/** 
 *  如果只有唯一孩子，给唯一孩子一个 icon(作为显示图标)
 *  多个孩子， 则给每一个孩子一个图标
 */
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
        meta: { title: 'Dashboard', icon: 'home-filled' }
      }
    ]
  },
  {
    path: '/example',
    component: layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'menu' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index.vue'),
        meta: { title: 'Table', icon: 'tools' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index.vue'),
        meta: { title: 'Tree', icon: 'Briefcase' }
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
        meta: { title: 'Form', icon: 'grid' }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/views/NotFound.vue'),
    hidden: true
  }
] as RouteRecordRaw[]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 前置守卫
router.beforeEach(permission)

export default router
