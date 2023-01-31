import { watch } from 'vue'
import { useGlobalSystem } from '@/hooks/useGlobalSystem'
import { colorRgb } from '@/utils/colorToRgb'

export function useChangeGlobalTheme() {
  const { isGrey, isAchromatism, themeColor, isDark } = useGlobalSystem()
  // 控制暗黑模式
  watch(
    () => isDark.value,
    newVal => {
      if (newVal) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
    {
      immediate: true
    }
  )
  // 控制全局的 是否灰色 和 是否色弱 模式
  watch(
    () => isGrey.value,
    newVal => {
      if (newVal) {
        document.documentElement.classList.add('is-grey')
      } else {
        document.documentElement.classList.remove('is-grey')
      }
    },
    {
      immediate: true
    }
  )
  watch(
    () => isAchromatism.value,
    newVal => {
      if (newVal) {
        document.documentElement.classList.add('is-achromatism')
      } else {
        document.documentElement.classList.remove('is-achromatism')
      }
    },
    {
      immediate: true
    }
  )
  // 控制全局颜色
  watch(
    () => themeColor.value,
    newVal => {
      document.documentElement.style.setProperty('--el-color-primary', newVal)
      document.documentElement.style.setProperty('--el-color-primary-dark-2', newVal)
      // 为 elementplus 中多种主要颜色改变主题颜色
      for (let i = 1; i <= 9; i++) {
        const color = `rgba(${colorRgb(newVal)}, 0.${i})`
        document.documentElement.style.setProperty(`--el-color-primary-light-${10 - i}`, color)
      }
    },
    {
      immediate: true
    }
  )
}
