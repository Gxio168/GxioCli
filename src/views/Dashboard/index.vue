<template>
  <div>
    首页
    <br />
    <span style="font-size: 30px">{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/auth"
import { storeToRefs } from "pinia"
import { useRoute } from "vue-router"

const route = useRoute()

const authStore = useAuthStore()
const { name } = storeToRefs(authStore)
</script>
<style scoped lang="less"></style>
