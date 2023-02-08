import data from './data.json'

const tokens = data.tokens
const user = data.user
const roles = data.roles

export default [
  // 用户登录
  {
    url: '/api/user/login',
    method: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]
      if (token) {
        return {
          statusCode: 200,
          data: token,
          message: 'ok'
        }
      } else {
        return {
          statusCode: 599,
          message: '账户或密码不正确'
        }
      }
    }
  },
  // 获取用户信息
  {
    url: '/api/user/info',
    method: 'get',
    response: config => {
      const token = config.headers.token
      const info = user[token]
      if (info) {
        return {
          statusCode: 200,
          data: info
        }
      } else {
        return {
          statusCode: 201,
          message: '没有找到该用户'
        }
      }
    }
  },
  // 获取用户能拥有的页面信息 和 按钮权限
  {
    url: '/api/user/role',
    method: 'get',
    response: config => {
      const token = config.headers.token
      const info = user[token]
      const role = roles[info['roles']]
      if (info) {
        return {
          statusCode: 200,
          data: role
        }
      } else {
        return {
          statusCode: 201,
          message: '没有找到该用户'
        }
      }
    }
  }
]
