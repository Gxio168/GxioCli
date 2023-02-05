export type UserInfo = {
  username: string
  password: string
}

/**
 * 合并类型
 * @example
 * => unionObject<{ name: string }, { age: number }> => { name: string, age: number}
 */
export type unionObject<T, U, Union = U & T> = {
  [key in keyof Union]: key extends keyof T ? T[key] : key extends keyof U ? U[key] : never
}
