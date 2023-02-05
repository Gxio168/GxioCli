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
    roles: 'admin',
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '管理员'
  },
  'editor-token': {
    roles: 'editor',
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '一般用户'
  }
}

const roles = {
  admin: {
    components: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: '/dashboard',
        meta: { title: '首页', icon: 'home-filled' }
      },
      {
        path: '/role',
        redirect: '/role/admin',
        name: 'Role',
        meta: { title: '权限管理', icon: 'menu' },
        children: [
          {
            path: '/role/admin',
            name: 'Admin',
            component: '/role/adminPage',
            meta: { title: '管理员界面', icon: 'Avatar' }
          },
          {
            path: '/role/editor',
            name: 'Editor',
            component: '/role/editorPage',
            meta: { title: '用户界面', icon: 'UserFilled' }
          },
          {
            path: '/role/btn',
            name: 'Btn',
            component: '/role/btnPage',
            meta: { title: '按钮权限', icon: 'tools' }
          }
        ]
      }
    ],
    btnControl: ['role:btn:add', 'role:btn:delete', 'role:btn:update', 'role:btn:search']
  },
  editor: {
    components: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: '/dashboard',
        meta: { title: '首页', icon: 'home-filled' }
      },
      {
        path: '/role',
        redirect: '/role/admin',
        name: 'Role',
        meta: { title: '权限管理', icon: 'menu' },
        children: [
          {
            path: '/role/editor',
            name: 'Editor',
            component: '/role/editorPage',
            meta: { title: '用户界面', icon: 'UserFilled' }
          },
          {
            path: '/role/btn',
            name: 'Btn',
            component: '/role/btnPage',
            meta: { title: '按钮权限', icon: 'tools' }
          }
        ]
      }
    ],
    btnControl: ['role:btn:update', 'role:btn:search']
  }
}
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
