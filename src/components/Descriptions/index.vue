<script setup lang="ts">
interface ItemConfig {
  label: string
  text: string
}
defineProps<{
  title: string
  config: ItemConfig[]
}>()
</script>
<template>
  <el-descriptions :title="title" :column="1" border>
    <el-descriptions-item v-for="item in config" :span="1" :label="item.label">
      {{ item.text }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<style scoped lang="scss"></style>
