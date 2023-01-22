<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useGlobalSystem } from './hooks/useGlobalSystem'

const { isGrey, isAchromatism } = useGlobalSystem()
watch(
  () => isGrey.value,
  newVal => {
    if (newVal) {
      document.documentElement.classList.add('is-dark')
    } else {
      document.documentElement.classList.remove('is-dark')
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
</script>
<style lang="scss">
.is-dark {
  filter: grayscale(1);
}
.is-achromatism {
  filter: invert(80%)
}
</style>
<style scoped lang="scss"></style>
