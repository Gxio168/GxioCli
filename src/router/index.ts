import { createRouter, createWebHistory } from 'vue-router'
import { permission } from '@/utils/permission'
import Nprogress from '@/utils/nprogress'
import type { RouteRecordRaw } from 'vue-router'

import { staticRoutes } from './staticRoutes'

const router = createRouter({
  history: createWebHistory(),
  routes: staticRoutes as RouteRecordRaw[]
})

// 前置守卫
router.beforeEach(permission)

router.afterEach(() => {
  Nprogress.done()
})

export default router
