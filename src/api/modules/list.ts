import request from '../'

// 获取信息 api
export function reqGetInfoList(url: string, page: number, offset: number, formData?: any) {
  return request.get<Array<any>>(`/list/${url}?page=${page}&offset=${offset}`)
}

// 修改信息
export function reqUpdateInfoList(url: string, config: any) {
  return request.post<Array<any>>(`/list/${url}`, config)
}

// 删除信息
export function reqDeleteInfoList(url: string, ids: number[]) {
  return request.delete<Array<any>>(`/list/${url}`, { data: ids })
}

// 带参数的获取数据
export function reqPutInfoList(url: string, page: number, data: any) {
  return request.put<Array<any>>(`/list/${url}?page=${page}`, data)
}
