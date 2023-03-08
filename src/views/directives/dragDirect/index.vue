<script setup lang="ts" name="DragDirect"></script>
<template>
  <page-content-vue>
    <template #title>拖拽指令🍇🍇🍇🍓🍓🍓 </template>
      <div class="box-content">
        <div class="demo" v-draggable>
          <span style="text-align: center">我可以进行拖拽<br />相对于最近的 relative 元素</span>
        </div>
      </div>
  </page-content-vue>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
