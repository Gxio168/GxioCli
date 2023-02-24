import type { CSSProperties } from 'vue'

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

export type FormTable = Array<{
  label: string // ===> 展示名称
  prop: string //  ===> 上传时候的属性名
  type?: 'input' | 'avatar' | 'photo' | 'select' // ====> lable 显示格式
  fixed?: string | boolean // ===> 是否是左右固定 table 栏
  slotName?: string // ===> 自定义 slot 插槽内容的插槽名
  canModify?: boolean // ===> 是否出现在 可修改栏中
  children?: Array<any> // ===> type: select 时的配置
  isHide?: boolean // ===> 是否显示在 table 栏中
  config?: Partial<Avatar>
}>

interface Avatar {
  drag: boolean
  disabled: boolean
  id: string
  isRadius: boolean
  limitSize: number
  limitNums: number
  type: 'avatar' | 'picture'
  uploadStyle: CSSProperties
  url: string
  imageProps: string
  tip: string
}

/**
 * 合并类型
 * @example
 * => unionObject<{ name: string }, { age: number }> => { name: string, age: number}
 */
export type unionObject<T, U, Union = U & T> = {
  [key in keyof Union]: key extends keyof T ? T[key] : key extends keyof U ? U[key] : never
}
