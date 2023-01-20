<template>
  <div class="app-wraper">
    <el-container style="height: 100%">
      <el-aside :width="asideWidth" class="aside">
        <Sidebar class="sidebar-container" />
      </el-aside>
      <el-container style="display: block">
        <Navbar />
        <AppMain />
      </el-container>
    </el-container>

    <div class="main-container"></div>
  </div>
</template>

<script setup lang="ts">
import { Sidebar, Navbar, AppMain } from './components/index'
import { computed } from 'vue'
import { useGlobalSystem } from '@/hooks/useGlobalSystem'
const { sidebar } = useGlobalSystem()


// 控制侧边栏的宽度
const asideWidth = computed(() => {
  if (sidebar.value.opened) {
    return `${200}px`
  } else {
    return `${60}px`
  }
})
</script>
<style scoped lang="scss">
.app-wraper {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .sidebar-container {
    height: 100%;
    background-color: #304156;
  }
}

.aside {
  transition: all 0.3s;
  &.open {
    width: 200px;
  }
  &.close {
    width: 60px;
  }
}
</style>
