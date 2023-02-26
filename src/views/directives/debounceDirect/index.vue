<script setup lang="ts">
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
    <template #content>
      <div class="box-content">
        <el-button type="primary" v-debounce="handleDebounceClick">防抖按钮(0.5秒后执行)</el-button>
      </div>
    </template>
  </page-content-vue>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
