const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}
const user = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '管理员'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '一般用户'
  }
}

module.exports = [
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
          statusCode: 201,
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
]