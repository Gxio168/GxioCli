<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useChangeGlobalTheme } from './hooks/useChangeGlobalTheme'

// 监视全局样式改变效果
useChangeGlobalTheme()
</script>
