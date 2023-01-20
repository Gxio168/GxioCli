import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import type { BtnPermisson } from './interface'

export function useBtnPermisson() {
  const route = useRoute()
  const authStore = useAuthStore()
  let btnPermisson: BtnPermisson = {
    add: false,
    delete: false,
    update: false,
    search: false
  }

  // 获取按钮权限
  const btnList = authStore.btnControl
  // 获取当前路由
  const matchedRoute = route.fullPath.slice(1).split('/').join(':')
  btnList.forEach((item: string) => {
    if (matchedRoute.indexOf(item)) {
      const tempArr = item.split(':')
      const key = tempArr[tempArr.length - 1] as keyof BtnPermisson
      btnPermisson[key] = true
    }
  })

  return {
    btnAdd: btnPermisson.add,
    btnDelete: btnPermisson.delete,
    btnUpdate: btnPermisson.update,
    btnSearch: btnPermisson.search
  }
}
