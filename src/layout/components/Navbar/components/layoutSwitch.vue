<template>
  <div class="layout-switch">
    <svg-icon-vue name="buju" @click="handleClick" />
  </div>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log(1)
}
</script>
<style scoped lang="scss">
.layout-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;
}
</style>
