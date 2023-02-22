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
    method: 'put',
    response: config => {
      const { name, gender, age, id, status, createTime } = config.body
      const { page } = config.query
      return {
        statusCode: 200,
        data: mock({
          [`result|${page}`]: [
            {
              name: name || '@cname()',
              [`sex|${gender !== '' ? gender : '0-1'}`]: 0,
              [`age|${age || '16-45'}`]: 0,
              id: id || '@id()',
              email: '@email()',
              [`status|${status ? 0 : 0 || '1-2'}`]: !status,
              location: '@city()',
              createTime: createTime || '@datetime(yyyy-MM-dd HH:mm:ss)'
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
