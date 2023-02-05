import router from '@/router'
import { getFlatArr } from '@/utils/matchedRoutes'
import { notFoundRoute } from './staticRoutes'

export function initDynamicRoutes(routes: Array<any>) {
  const modules = import.meta.glob('@/views/**/*.vue')
  // 返回一个新数组，不修改原数组
  const dynamicRouter = getFlatArr(JSON.parse(JSON.stringify(routes)))
  dynamicRouter.forEach((item: any) => {
    if (item.children) delete item.children
    if (item.component) item.component = modules[`/src/views${item.component}/index.vue`]
    router.addRoute('Layout', item)
  })
  // 最后添加 匹配 所有路由的 notFound
  router.addRoute(notFoundRoute)
}
