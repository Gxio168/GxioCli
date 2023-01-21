<template>
  <div class="not-found">
    <el-button type="warning" @click="router.push('/')">返回首页</el-button>
    <img src="@/assets/404.png" alt="" />
  </div>
</template>

<script setup lang="ts">
import { useRouterOrRoute } from '@/hooks/useRoute'

const { router } = useRouterOrRoute()
</script>
<style scoped lang="scss">
.not-found {
  display: flex;
  flex-direction: column;
}
</style>
