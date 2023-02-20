/**
 * @description 初始化 v-model 需要绑定数据
 */
export function getStaticData(config: any) {
  const obj = {} as any
  for (const item of config) {
    obj[item['prop']] = ''
  }
  return obj
}
