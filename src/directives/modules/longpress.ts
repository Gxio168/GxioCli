import type { Directive, DirectiveBinding } from 'vue'

interface ElType extends HTMLElement {
  start: (e: any) => void
  cancel: () => void
}

const longpress: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    if (typeof binding.value !== 'function') {
      throw 'callback must be a function'
    }
    let timer: any = null
    el.start = (e: any) => {
      // 鼠标点击了但是不是左键直接返回
      if (e.button) {
        if (e.type === 'click' && e.button !== 0) {
          return 0
        }
      }
      if (!timer) {
        timer = setTimeout(() => {
          binding.value()
        }, 2000)
      }
    }
    el.cancel = () => {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
    }
    // 添加事件监听器
    el.addEventListener('mousedown', el.start)
    el.addEventListener('touchstart', el.start)
    // 取消计时器
    el.addEventListener('click', el.cancel)
    el.addEventListener('mouseout', el.cancel)
    el.addEventListener('touchend', el.cancel)
    el.addEventListener('touchcancel', el.cancel)
  },
  beforeUnmount(el: ElType) {
    el.removeEventListener('mousedown', el.start)
    el.removeEventListener('touchstart', el.start)
    el.removeEventListener('click', el.cancel)
    el.removeEventListener('mouseout', el.cancel)
    el.removeEventListener('touchend', el.cancel)
    el.removeEventListener('touchcancel', el.cancel)
  }
}

export default longpress
