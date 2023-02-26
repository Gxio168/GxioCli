<script setup lang="ts">
import { ElMessage } from 'element-plus'
const longpress = () => {
  ElMessage.success('长按事件触发成功 🎉🎉🎉')
}
</script>
<template>
  <page-content-vue>
    <template #title>长按指令🍇🍇🍇🍓🍓🍓 </template>
    <template #content>
      <div class="box-content">
        <el-button type="primary" v-longpress="longpress">长按两秒触发事件</el-button>
      </div>
    </template>
  </page-content-vue>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
