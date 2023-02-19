import request from '../index.js'
import type { UserInfo } from '@/types/index'
import type { Token } from '../interface'

// 登录
export const reqLogin = (userInfo: UserInfo) => {
  return request.post<Token>('/user/login', userInfo, { headers: { noLoading: false } })
}

// 获取用户信息
export const reqUserInfo = () => {
  return request.get<any>('/user/info', { headers: { noLoading: true } })
}

export const reqUserRole = () => {
  return request.get<any>('/user/role', { headers: { noLoading: true } })
}
