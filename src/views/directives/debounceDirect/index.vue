<script setup lang="ts" name="DebounceDirect">
import { ElMessage } from 'element-plus'

const handleDebounceClick = () => {
  ElMessage({
    type: 'success',
    message: '我是防抖按钮触发的事件 🍍🍓🍌'
  })
}
</script>
<template>
  <page-content-vue>
    <template #title>防抖指令🍇🍇🍇🍓🍓🍓 </template>
    <div class="box-content">
      <el-button type="primary" v-debounce="handleDebounceClick">防抖按钮(0.5秒后执行)</el-button>
    </div>
  </page-content-vue>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
