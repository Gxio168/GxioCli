<template>
  <div class="full-screen">
    <svg-icon-vue :name="curName" @click="changeScreen" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGlobalSystem } from '@/hooks/useGlobalSystem'

const { fullScreen, toggleFullScreen } = useGlobalSystem()

const curName = computed(() => {
  let name
  fullScreen.value ? (name = 'suoxiao') : (name = 'fangda')
  return name
})

// 切换状态
const changeScreen = () => {
  if (fullScreen.value) {
    document.exitFullscreen()
  } else {
    document.body.requestFullscreen()
  }
  toggleFullScreen()
}
</script>
<style scoped lang="scss">
.full-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;
}
</style>
