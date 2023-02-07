import { defineStore } from 'pinia'
import { reqLogin, reqUserInfo, reqUserRole } from '@/api/auth'
import { getToken, setToken, removeToken } from '@/utils/token'
import { ElMessage } from 'element-plus'
import { initDynamicRoutes } from '@/router/modules/dynamicRoutes'
import { getShowMenuList } from '@/utils/matchedRoutes'
import type { UserInfo } from '@/type'

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
      if (result.statusCode === 200) {
        setToken(result.data.token)
        this.token = result.data.token
        await this.getUserInfo()
        await this.getUserRole()
        ElMessage.success({
          message: '登录成功'
        })
      }
      return result
    },
    // 获取用户信息
    async getUserInfo() {
      const result = await reqUserInfo()
      if (result.statusCode === 200) {
        this.userInfo = result.data
      }
    },
    // 获取用户权限相关
    async getUserRole() {
      const res = await reqUserRole()
      if (res.statusCode === 200) {
        const result = res.data
        this.components = result.components
        this.btnControl = result.btnControl
        initDynamicRoutes(this.components)
        this.menuList = getShowMenuList(this.components)
      }
    },
    // 退出登录
    logout() {
      ElMessage.success({
        message: '退出登录成功'
      })
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
    storage: localStorage
  }
})