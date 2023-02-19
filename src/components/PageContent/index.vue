<template>
  <el-card class="page-content">
    <div class="title"><slot name="title"></slot></div>
    <slot name="content"></slot>
  </el-card>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
.page-content {
  width: 100%;
  height: 100%;
  display: inline-block;
  .title {
    font-size: 24px;
    font-weight: bold;
    margin: 20px auto;
    text-align: center;
  }
}
</style>
