<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useGlobalSystem } from './hooks/useGlobalSystem'
import { colorRgb } from '@/utils/colorToRgb'

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
    const color1 = `rgba(${colorRgb(newVal)}, 0.9)`
    const color2 = `rgba(${colorRgb(newVal)}, 0.8)`
    const color3 = `rgba(${colorRgb(newVal)}, 0.7)`
    const color4 = `rgba(${colorRgb(newVal)}, 0.6)`
    const color5 = `rgba(${colorRgb(newVal)}, 0.5)`
    const color6 = `rgba(${colorRgb(newVal)}, 0.4)`
    const color7 = `rgba(${colorRgb(newVal)}, 0.3)`
    const color8 = `rgba(${colorRgb(newVal)}, 0.2)`
    const color9 = `rgba(${colorRgb(newVal)}, 0.1)`
    document.documentElement.style.setProperty('--el-color-primary', newVal)
    document.documentElement.style.setProperty('--el-color-primary-dark-2', newVal)
    document.documentElement.style.setProperty('--el-color-primary-light-1', color1)
    document.documentElement.style.setProperty('--el-color-primary-light-2', color2)
    document.documentElement.style.setProperty('--el-color-primary-light-3', color3)
    document.documentElement.style.setProperty('--el-color-primary-light-4', color4)
    document.documentElement.style.setProperty('--el-color-primary-light-5', color5)
    document.documentElement.style.setProperty('--el-color-primary-light-6', color6)
    document.documentElement.style.setProperty('--el-color-primary-light-7', color7)
    document.documentElement.style.setProperty('--el-color-primary-light-8', color8)
    document.documentElement.style.setProperty('--el-color-primary-light-9', color9)
  },
  {
    immediate: true
  }
)
</script>
<style lang="scss">
.is-grey {
  filter: grayscale(1);
}
.is-achromatism {
  filter: invert(80%);
}
#nprogress .bar {
  background: var(--el-color-primary); //自定义颜色
}
</style>
