import request from '../'

// 获取信息 api
export function reqGetInfoList(url: string, page: number, offset: number) {
  return request.get<Array<any>>(`/list/${url}?page=${page}&offset=${offset}`)
}

export function reqUpdateInfoList(url: string, config: any) {
  return request.post<Array<any>>(`/list/${url}`, config)
}

export function reqDeleteInfoList(url: string, ids: number[]) {
  return request.delete<Array<any>>(`/list/${url}`, { data: ids })
}
