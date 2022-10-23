<template>
  <div class="app-wraper" :class="classObj">
    <Sidebar class='sidebar-container' />
    <div class="main-container">
      <Navbar />
      <AppMain />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { Sidebar, Navbar, AppMain } from './components/index'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const appStore = useAppStore()
const { sidebar } = storeToRefs(appStore)

const classObj = computed(() => {
  return {
    hideSidebar: !sidebar.value.opened,
    openSidebar: sidebar.value.opened,
    withoutAnimation: sidebar.value.withoutAnimation,
  }
})

const handleClickOutside = () => {
  appStore.closeSidebar(false)
}


</script>
<style scoped lang='scss'>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>