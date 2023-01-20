import type { unionObject } from '@/type'
import type { RouteRecordRaw } from 'vue-router'

export type unionRoutes = unionObject<RouteRecordRaw, { hidden?: boolean }>
