export type Token = {
  token: string
}

interface Result {
  statusCode: number
  message: string
}

export interface ResultData<T> extends Result {
  data: T
}

export interface DepartmentItem {
  id: string
  name: string
  children?: Array<DepartmentItem>
}
