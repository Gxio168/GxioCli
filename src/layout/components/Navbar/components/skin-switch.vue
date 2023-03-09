<script setup lang="ts">
import mittBus from '@/config/mitt'

// 全局事件总线
const handleToggleDrawer = () => {
  mittBus.emit('openThemeDrawer')
}
</script>
<template>
  <div class="skin-switch">
    <svg-icon-vue name="pifu" @click="handleToggleDrawer" />
  </div>
</template>

<style scoped lang="scss">
.skin-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;
}
</style>
