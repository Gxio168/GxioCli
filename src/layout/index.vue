<template>
  <div class="app-wraper">
    <el-container style="height: 100%">
      <el-aside :width="asideWidth" class="aside">
        <Sidebar-vue class="sidebar-container" />
      </el-aside>
      <el-container class="container">
        <Navbar-vue />
        <AppMain-vue />
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { SidebarVue, NavbarVue, AppMainVue } from './components/index'
import { computed } from 'vue'
import { useGlobalSystem } from '@/hooks/useGlobalSystem'
const { sidebarOpen } = useGlobalSystem()

// 控制侧边栏的宽度
const asideWidth = computed(() => {
  if (sidebarOpen.value) {
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
    background-color: var(--menu_bg);
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

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
