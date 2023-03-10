<template>
  <div class="app-wraper">
    <el-container style="height: 100%">
      <el-header>
        <div class="nav-container">
          <div class="title">
            <img src="../../../public/favicon.ico" alt="" />
            <span style="white-space: nowrap">Gxio Admin</span>
          </div>
          <Navbar-vue style="flex: 1" />
        </div>
      </el-header>
      <div class="container">
        <el-aside class="aside">
          <Sidebar-vue class="sidebar-container" />
        </el-aside>
        <div class="box">
          <AppMain-vue />
        </div>
      </div>
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

.aside {
  display: flex;
  flex-direction: column;
  transition: width 0.3s;
  width: v-bind(asideWidth);
  &.open {
    width: 200px;
  }
  &.close {
    width: 60px;
  }
}

.box {
  width: calc(100% - v-bind(asideWidth));
  display: flex;
  flex-direction: column;
  transition: width 0.3s;
}

.nav-container {
  display: flex;
  background-color: #191a20;
  height: 44px;
  .title {
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

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
}
.container {
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #fff;
}
:deep(.el-header) {
  padding: 0;
  height: auto;
}
</style>
