import { ref } from 'vue'
import { throttle } from '@/utils/throttle'

export function useWindowWidth() {
  let pageWidth = ref(window.innerWidth)
  const callback = throttle(() => {
    pageWidth.value = window.innerWidth
  })
  window.addEventListener('resize', callback)
  function cancelHandleWindow() {
    window.removeEventListener('resize', callback)
  }

  return {
    pageWidth,
    cancelHandleWindow
  }
}
