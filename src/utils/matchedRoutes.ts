import { dynamicRoutes } from '@/router/dynamicRoutes'

// 获取匹配到的路由
export function formatRoutes(routes: any) {
  const NotFound = dynamicRoutes[dynamicRoutes.length - 1]
  const matchedRoutes = getMatchedRoutes(routes, dynamicRoutes)
  matchedRoutes.push(NotFound)
  return matchedRoutes
}

function getMatchedRoutes(routes: any, totalRotues: any) {
  return totalRotues.filter((curRoute: any) => {
    let flag = false
    routes.forEach((route: any) => {
      if (route.name === curRoute.name) {
        flag = true
        if (route.children && curRoute.children) {
          // 解决路由重定向的问题, 将获取到的子路由的第一个默认设置为 redirect 地址
          if (curRoute.redirect) {
            curRoute.redirect = [route.path, route.children[0].path].join('/')
          }
          curRoute.children = getMatchedRoutes(route.children, curRoute.children)
        }
      } else {
      }
    })
    if (!flag) {
      return false
    }
    return true
  })
}
