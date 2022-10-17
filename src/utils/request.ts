import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getToken } from '@/utils/token'

const request = axios.create({
  baseURL: '/api',
  timeout: 5000
})

request.interceptors.request.use(req => {
  
  return req
}, err => {

})

export default request