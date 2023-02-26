/**
 * v-copy 指令
 * 复制输入框内容到剪切板中
 */
import type { Directive, DirectiveBinding } from 'vue'
import { ElMessage } from 'element-plus'

interface ElType extends HTMLElement {
  copyData: string | number
}

const copy: Directive = {
  // 挂载事件
  mounted(el: ElType, binding: DirectiveBinding) {
    el.copyData = binding.value
    el.addEventListener('click', handleClick)
  },
  // 组件更新，获取新值
  updated(el: ElType, binding: DirectiveBinding) {
    el.copyData = binding.value
  },
  // 组件卸载
  beforeUnmount(el: ElType) {
    el.removeEventListener('click', handleClick)
  }
}

function handleClick(this: any) {
  // 通过新建 input 标签来实现复制功能
  const input = document.createElement('input')
  input.value = this.copyData.toLocaleString()
  document.body.appendChild(input)
  input.select()
  document.execCommand('Copy')
  document.body.removeChild(input)
  ElMessage({
    type: 'success',
    message: '复制成功'
  })
}
export default copy
