export enum ResultEnum {
  SUCCESS = 200,
  TIMEOUT = 5000,
  OVERDUE = 599
}

export type UserInfo = {
  username: string
  password: string
}

export type FormHeader = Array<{
  prop: string
  label: string
  type: string
  placeholder?: string
  startPlaceHolder?: string
  endPlaceHolder?: string
  children?: Array<{
    label: string
    value: any
  }>
}>

/**
 * 合并类型
 * @example
 * => unionObject<{ name: string }, { age: number }> => { name: string, age: number}
 */
export type unionObject<T, U, Union = U & T> = {
  [key in keyof Union]: key extends keyof T ? T[key] : key extends keyof U ? U[key] : never
}
