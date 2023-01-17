import request from '@/utils/request/index'
import type { UserInfo } from '@/type/index'

// 登录
export const reqLogin = (userInfo: UserInfo) => {
  return request.post('/user/login', userInfo)
}

export const reqUserInfo = () => {
  return request.get('/user/info')
}
