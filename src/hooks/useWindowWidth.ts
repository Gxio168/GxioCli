import { ref } from 'vue'
import { throttle } from '@/utils/throttle'

export function useWindowWidth() {
  let pageWidth = ref(window.innerWidth)
  window.addEventListener(
    'resize',
    throttle(() => {
      pageWidth.value = window.innerWidth
    })
  )
  return {
    pageWidth
  }
}
