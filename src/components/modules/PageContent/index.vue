<script setup lang="ts">
import { useChangeDark } from '@/hooks/useChangeDark'

const { bgColor } = useChangeDark()
</script>

<template>
  <div class="page-content">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <slot name="default"></slot>
  </div>
</template>

<style scoped lang="scss">
.page-content {
  width: 100%;
  height: 100%;
  display: inline-block;
  background-color: v-bind(bgColor);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 10px 2px rgba($color: #272525, $alpha: 0.1);

  .title {
    font-size: 24px;
    font-weight: bold;
    margin: 10px auto;
    text-align: center;
  }
}
</style>
