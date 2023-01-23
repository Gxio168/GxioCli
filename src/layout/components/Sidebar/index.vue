<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <div class="title">
        <img src="../../../../public/favicon.ico" alt="" />
        <span v-if="sidebarOpen">Gxio Admin</span>
      </div>
      <el-menu
        :default-active="activeMenu"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
        background-color="#304156"
        text-color="#bfcbd9"
        :active-text-color="themeColor"
        :router="true"
        :collapse="isCollapse"
      >
        <SidebarItem
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SidebarItem from './components/SidebarItem.vue'
import { useAuthStore } from '@/stores/auth'

import { useRouterOrRoute } from '@/hooks/useRoute'
import { useGlobalSystem } from '@/hooks/useGlobalSystem'

const { sidebarOpen, themeColor } = useGlobalSystem()
const { route } = useRouterOrRoute()
const authStore = useAuthStore()
const routes = authStore.menuList

// 获取当前被点击的页面路径
const activeMenu = computed<any>(() => {
  const { meta, path } = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})

const isCollapse = computed(() => !sidebarOpen.value)
</script>
<style scoped lang="scss">
.el-menu {
  border: none;
  border-right-width: 0;
}

.title {
  width: 100%;
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
</style>
