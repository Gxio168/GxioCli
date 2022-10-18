import { defineStore } from 'pinia'
import { reqLogin, reqUserInfo } from '@/api/auth'
import { getToken, setToken, removeToken } from '@/utils/token'
import type { UserInfo, ReturnData } from '@/type/index'
import { ElMessage } from 'element-plus'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: getToken() || '',
    userInfo: {} as any
  }),
  actions: {
    // 登录
    async login(userInfo: UserInfo) {
      const result = await reqLogin(userInfo) as unknown as ReturnData
      if (result.statusCode === 200) {
        setToken(result.data.token)
        this.token = result.data.token
        ElMessage.success({
          message: '登录成功'
        })
      }
      return result
    },
    // 获取用户信息
    async getUserInfo() {
      const result = await reqUserInfo() as unknown as ReturnData
      if (result.statusCode === 200) {
        this.userInfo = result.data
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
    }
  },
  getters: {
    name(state) {
      return state.userInfo.name
    }
  },
})