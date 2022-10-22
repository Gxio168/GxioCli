<template>
  <div class="app-wraper">
    <Sidebar class='sidebar-container' />
    <div class="main-container">
      <Navbar />
      <AppMain />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { Sidebar, Navbar, AppMain } from './components/index'
</script>
<style scoped lang='scss'>
.app-wraper {
  height: 100%;
  width: 100%;
}
</style>