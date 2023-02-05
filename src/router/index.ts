import { createRouter, createWebHashHistory } from 'vue-router'
import { permission } from '@/utils/permission'
import Nprogress from '@/utils/nprogress'
import type { RouteRecordRaw } from 'vue-router'

import { staticRoutes } from './modules/staticRoutes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes as Array<RouteRecordRaw>
})

// 前置守卫
router.beforeEach(permission)

router.afterEach(() => {
  Nprogress.done()
})

export default router
