import { mock } from 'mockjs'

export default [
  {
    url: '/api/list/userList',
    method: 'get',
    response: config => {
      const { page, offset } = config.query
      return {
        statusCode: 200,
        data: mock({
          [`result|${page}`]: [
            {
              name: '@cname()',
              'sex|0-1': 0,
              'age|16-45': 1,
              id: '@id()',
              email: '@email()',
              'status|1-2': true,
              location: '@city()',
              createTime: '@datetime(yyyy-MM-dd HH:mm:ss)'
            }
          ]
        }).result,
        message: 'ok'
      }
    }
  },
  {
    url: '/api/list/userList',
    method: 'post',
    response: config => {
      return {
        statusCode: 200,
        data: mock({
          ['result|10']: [
            {
              name: '@cname()',
              'sex|0-1': 0,
              'age|16-45': 1,
              id: '@id()',
              email: '@email()',
              'status|1-2': true,
              location: '@city()',
              createTime: '@datetime(yyyy-MM-dd HH:mm:ss)'
            }
          ]
        }).result,
        message: 'ok'
      }
    }
  },
  {
    url: '/api/list/userList',
    method: 'delete',
    response: config => {
      return {
        statusCode: 200,
        data: mock({
          ['result|10']: [
            {
              name: '@cname()',
              'sex|0-1': 0,
              'age|16-45': 1,
              id: '@id()',
              email: '@email()',
              'status|1-2': true,
              location: '@city()',
              createTime: '@datetime(yyyy-MM-dd HH:mm:ss)'
            }
          ]
        }).result,
        message: 'ok'
      }
    }
  }
]
