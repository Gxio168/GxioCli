import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getToken } from '@/utils/token'

const request = axios.create({
  baseURL: '/api',
  timeout: 5000
})

request.interceptors.request.use(req => {
  (req as any).headers['Token'] = getToken()
  return req
}, err => {

})

request.interceptors.response.use(res => {
  if (res.data.statusCode !== 200) {
    ElMessage.error({
      message: res.data.message
    })
  }
  return res.data
}, err => {

})

export default request