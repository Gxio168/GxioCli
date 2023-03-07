<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { useChangeGlobalTheme } from './hooks/useChangeGlobalTheme'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { useGlobalSystem } from '@/hooks/useGlobalSystem'

const { isChinese } = useGlobalSystem()

const locale = computed(() => {
  return isChinese.value ? zhCn : en
})

// 监视全局样式改变效果
useChangeGlobalTheme()
</script>
