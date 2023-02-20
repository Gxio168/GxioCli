import { h, render } from 'vue'

import infoDetailCom from './index.vue'

export const infoDetail = (type: string, template: any, config: any) => {
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
      close: destroyed,
      cancelHandler,
      confirmHandler
    })
    render(vnode, document.body)
  })
}
