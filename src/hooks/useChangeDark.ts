import { watch, ref } from 'vue'
import { useGlobalSystem } from './useGlobalSystem'

export function useChangeDark() {
  const { isDark } = useGlobalSystem()
  const DARK = '#121212'
  const LIGHT = '#ffffff'
  let bgColor = ref(LIGHT)
  let textColor = ref(DARK)
  watch(
    () => isDark.value,
    newVal => {
      if (newVal) {
        bgColor.value = DARK
        textColor.value = LIGHT
      } else {
        bgColor.value = LIGHT
        textColor.value = DARK
      }
    },
    {
      immediate: true
    }
  )
  return {
    bgColor: bgColor,
    textColor: textColor
  }
}
