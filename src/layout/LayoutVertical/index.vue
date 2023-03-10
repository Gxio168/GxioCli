<template>
  <div class="app-wraper">
    <el-container style="height: 100%">
      <el-aside :width="asideWidth" class="aside">
        <div class="title">
          <img src="../../../../public/favicon.ico" alt="" />
          <span v-if="sidebarOpen" style="white-space: nowrap">Gxio Admin</span>
        </div>
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
import { SidebarVue, NavbarVue, AppMainVue } from '../components/'
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

.title {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: var(--menu_bg);
  span {
    font-size: 20px;
    font-weight: 600;
    color: #dadada;
    margin-left: 10px;
  }
  img {
    cursor: pointer;
    width: 24px;
    height: 24px;
  }
}

.aside {
  display: flex;
  flex-direction: column;
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
