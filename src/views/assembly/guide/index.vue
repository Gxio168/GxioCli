<script setup lang="ts">
import guide from '@/config/driver'
</script>
<template>
  <page-content-vue>
    <template #title> 引导页 🍓🍇🍈🍉 </template>
    <template #content>
      <div class="content">
        <el-alert
          type="warning"
          title="引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于 driver.js."
          :closable="false"
        ></el-alert>
        <el-button type="primary" @click="guide">打开引导页 🤹‍♂️</el-button>
      </div>
    </template>
  </page-content-vue>
</template>

<style scoped lang="scss">
@import url('./index.scss');
</style>
