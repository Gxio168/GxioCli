export default [
  // 用户登录
  {
    url: '/api/upload',
    method: 'post',
    response: config => {
      return {
        statusCode: 200,
        message: '文件上传成功'
      }
    }
  }
]
