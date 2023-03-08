<script setup lang="ts" name="CopyDirect">
const data = ref('我是被复制的内容 🍒 🍉 🍊')
</script>
<template>
  <page-content-vue>
    <template #title>复制指令🍇🍇🍇🍓🍓🍓 </template>
    <div class="box-content">
      <el-input v-model="data" style="width: 500px">
        <template #append>
          <el-button v-copy="data">复制</el-button>
        </template>
      </el-input>
    </div>
  </page-content-vue>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
