import type { FormHeader } from '@/types'

/**
 * @description 初始化 v-model 需要绑定数据
 */
export function getStaticData(config: FormHeader) {
  const obj = {} as any
  for (const item of config) {
    obj[item['prop']] = ''
  }
  return obj
}

/**
 * @description 折叠时首行显示的 item 数量
 */
export function showLineNum(span: number) {
  return ((24 / span) | 0) - 1
}

/**
 * @description 获取 按钮与当前行之前的空 item 数量
 */
export function getblankCol(span: number, len: number): number {
  return ((24 / span) | 0) - 1 - (len % ((24 / span) | 0))
}
