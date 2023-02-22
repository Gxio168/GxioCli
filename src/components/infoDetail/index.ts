import { h, render } from 'vue'
import type { FormRules } from 'element-plus'

import infoDetailCom from './index.vue'

/**
 *
 * @param type get | add | update
 * @param template 展示模板和 v-model 内容
 * @param config  传入的数值
 * @param rules   传入的校验规则
 * @returns
 */
export const infoDetail = (type: string, template: any, config: any, rules?: FormRules) => {
  return new Promise((resolve, reject) => {
    const destroyed = () => {
      render(null, document.body)
    }
    const cancelHandler = (res: any) => {
      reject(res)
    }
    const confirmHandler = (res: any) => {
      resolve(res)
    }
    const vnode = h(infoDetailCom, {
      type,
      config,
      template,
      rules,
      close: destroyed,
      cancelHandler,
      confirmHandler
    })
    render(vnode, document.body)
  })
}
