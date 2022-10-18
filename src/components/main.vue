<template>
  <div>
    首页
    {{ name }}
    <el-button @click="logout">退出登录试试？</el-button>
  </div>
</template>

<script setup lang='ts'>
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()
const { name } = storeToRefs(authStore)

// 退出登录
const logout = () => {
  authStore.logout()
  router.push({
    path: '/'
  })
}
</script>
<style scoped lang='less'>

</style>