<template>
  <div>
    {{name}}
  </div>
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const { name } = storeToRefs(authStore)

</script>
<style scoped lang='less'>

</style>