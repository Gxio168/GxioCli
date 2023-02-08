import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'
import { reqLogin, reqUserInfo, reqUserRole } from '@/api/modules/auth'
import { getToken, setToken, removeToken } from '@/utils/token'
import { initDynamicRoutes } from '@/router/modules/dynamicRoutes'
import { getShowMenuList } from '@/utils/matchedRoutes'
import type { UserInfo } from '@/types'
import { useAppStore } from './app'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: getToken() || '',
    userInfo: {} as any,
    btnControl: [] as any,
    components: [] as any,
    menuList: [] as any
  }),
  actions: {
    // 登录
    async login(userInfo: UserInfo) {
      const result = await reqLogin(userInfo)
      setToken(result.data.token)
      this.token = result.data.token
      await this.getUserInfo()
      await this.getUserRole()
      ElMessage.success({
        message: '登录成功'
      })
      return result
    },
    // 获取用户信息
    async getUserInfo() {
      const result = await reqUserInfo()
      this.userInfo = result.data
    },
    // 获取用户权限相关
    async getUserRole() {
      const res = await reqUserRole()
      const result = res.data
      this.components = result.components
      this.btnControl = result.btnControl
      initDynamicRoutes(this.components)
      this.menuList = getShowMenuList(this.components)
    },
    // 退出登录
    logout() {
      ElMessage.success({
        message: '退出登录成功'
      })
      const appStore = useAppStore()
      appStore.clearLabelbar()
      removeToken()
      this.token = ''
      this.userInfo = {}
      this.btnControl = []
      this.components = []
      this.menuList = []
    },

    // 定义方法在全局每次刷新时调用
    loadingBeforeRender() {
      initDynamicRoutes(this.components)
      this.menuList = getShowMenuList(this.components)
    }
  },
  getters: {
    name(state) {
      return state.userInfo.name
    },
    avatar(state) {
      return state.userInfo.avatar
    }
  },
  persist: {
    paths: ['token', 'userInfo', 'btnControl'],
    storage: localStorage
  }
})
