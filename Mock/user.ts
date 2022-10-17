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
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

module.exports = [
  // 用户登录
  {
    url: '/api/login',
    method: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]
      if (token) {
        return {
          statusCode: 200,
          data: token
        }
      } else {
        return {
          statusCode: 201,
          message: '账户或密码不正确'
        }
      }
    }
  }
]