<script setup lang="ts" name="ThrottleDirect">
import { ElMessage } from 'element-plus'
const handleThrottleClick = () => {
  ElMessage({
    type: 'success',
    message: '我是节流按钮触发的事件 🍍🍓🍌'
  })
}
</script>
<template>
  <page-content-vue>
    <template #title>节流指令🍇🍇🍇🍓🍓🍓 </template>
    <div class="box-content">
      <el-button type="primary" v-throttle="handleThrottleClick">
        节流按钮(每隔1s触发一次)
      </el-button>
    </div>
  </page-content-vue>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
