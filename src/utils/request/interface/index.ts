interface Result {
  statusCode: number
  message: string
}

export interface ResultData<T> extends Result {
  data: T
}
