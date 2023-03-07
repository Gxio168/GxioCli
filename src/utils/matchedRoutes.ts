/**
 * @description 用于将路由扁平化一维数组
 * @param routes 动态路由
 * @returns routers 扁平化后的路由
 */
export function getFlatArr(routes: Array<any>) {
  return routes.reduce((pre, cur) => {
    let flatArr = [...pre, cur]
    if (cur.children && cur.children.length) flatArr = [...flatArr, ...getFlatArr(cur.children)]
    return flatArr
  }, [])
}

export function getShowMenuList(menuList: Array<any>) {
  return menuList.filter(item => {
    item.children?.length && (item.children = getShowMenuList(item.children))
    return !item.hidden
  })
}

export function getKeepAliveList(menuList: Array<any>, keepAliveArr: string[] = []) {
  menuList.forEach(item => {
    item.meta.iskeepAlive && item.name && keepAliveArr.push(item.name)
    item.children?.length && getKeepAliveList(item.children, keepAliveArr)
  })
  return keepAliveArr
}
