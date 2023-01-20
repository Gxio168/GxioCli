<template>
  <div class="full-screen">
    <svg-icon-vue :name="curName" color="#000" @click="changeScreen" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGlobalSystem } from '@/hooks/useGlobalSystem'

const { navbar, toggleFullScreen } = useGlobalSystem()

const curName = computed(() => {
  let name
  navbar.value.fullScreen ? (name = 'suoxiao') : (name = 'fangda')
  return name
})

// 切换状态
const changeScreen = () => {
  if (navbar.value.fullScreen) {
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
