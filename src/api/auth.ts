import request from '@/utils/request'
import type { UserInfo } from '@/type/index'

// 登录
export const reqLogin = (userInfo: UserInfo) => {
  return request({
    url: '/user/login',
    method: 'post',
    data: userInfo
  })
}

export const reqUserInfo = () => {
  return request({
    url: '/user/info',
    method: 'get',
  })
}