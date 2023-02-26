import type { Directive } from 'vue'

interface ElType extends HTMLElement {
  parentNode: any
}
const draggable: Directive = {
  mounted(el: ElType) {
    el.style.cursor = 'move'
    el.style.position = 'absolute'
    el.onmousedown = function (e) {
      // 获取焦点距离当前元素边界的距离
      let disX = e.pageX - el.offsetLeft
      let disY = e.pageY - el.offsetTop
      document.onmousemove = function (e) {
        let x = e.pageX - disX
        let y = e.pageY - disY
        const maxX = el.parentNode.offsetWidth - el.offsetWidth
        const maxY = el.parentNode.offsetHeight - el.offsetWidth
        if (x > maxX) {
          x = maxX
        } else if (x < 0) {
          x = 0
        }
        if (y > maxY) {
          y = maxY
        } else if (y < 0) {
          y = 0
        }
        el.style.left = x + 'px'
        el.style.top = y + 'px'
      }
      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null
      }
    }
  }
}

export default draggable
