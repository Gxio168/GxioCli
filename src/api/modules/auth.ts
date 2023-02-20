import request from '../index'
import type { UserInfo } from '@/types/index'
import type { Token } from '../interface'

// 登录
export const reqLogin = (userInfo: UserInfo) => {
  // 需要全屏 loading 。。。
  return request.post<Token>('/user/login', userInfo, { headers: { noLoading: false } })
}

// 获取用户信息
export const reqUserInfo = () => {
  return request.get<any>('/user/info', { headers: { noLoading: true } })
}

export const reqUserRole = () => {
  return request.get<any>('/user/role', { headers: { noLoading: true } })
}
