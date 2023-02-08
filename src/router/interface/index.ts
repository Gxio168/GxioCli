import type { unionObject } from '@/types'
import type { RouteRecordRaw } from 'vue-router'

export type unionRoutes = unionObject<RouteRecordRaw, { hidden?: boolean }>
