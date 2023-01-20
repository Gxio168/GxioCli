import request from '@/utils/request/index'
import type { UserInfo } from '@/type/index'
import type { Token } from './interface'

// 登录
export const reqLogin = (userInfo: UserInfo) => {
  return request.post<Token>('/user/login', userInfo)
}

// 获取用户信息
export const reqUserInfo = () => {
  return request.get<any>('/user/info')
}

export const reqUserRole = () => {
  return request.get<any>('/user/role')
}
