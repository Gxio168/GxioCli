import request from '../'

export const reqUpload = (file: any) => {
  return request.post('/upload', { file })
}
