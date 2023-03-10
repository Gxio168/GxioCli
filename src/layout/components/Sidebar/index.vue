<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :unique-opened="true"
        :collapse-transition="false"
        mode="vertical"
        background-color="#191a20"
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
import { computed, watch, onBeforeUnmount } from 'vue'
import SidebarItem from './components/SidebarItem.vue'
import { useAuthStore } from '@/stores/modules/auth'

import { useRouterOrRoute } from '@/hooks/useRoute'
import { useGlobalSystem } from '@/hooks/useGlobalSystem'
import { useWindowWidth } from '@/hooks/useWindowWidth'
onBeforeUnmount(() => {
  cancelHandleWindow()
})
const { sidebarOpen, themeColor } = useGlobalSystem()
const { pageWidth, cancelHandleWindow } = useWindowWidth()
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

// 判断页面宽度来控制是否折叠
const isCollapse = computed(() => !sidebarOpen.value)
watch(
  () => pageWidth.value,
  newVal => {
    if (newVal < 1025) {
      sidebarOpen.value = false
    } else {
      sidebarOpen.value = true
    }
  },
  { immediate: true }
)
</script>
<style scoped lang="scss">
.el-menu {
  border: none;
  border-right-width: 0;
}
</style>
