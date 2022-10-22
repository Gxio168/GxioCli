<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu" :unique-opened="false" :collapse-transition="false" mode="vertical"
        background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF" router="true">
        <SidebarItem v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import SidebarItem from "./SidebarItem.vue";

const router = useRouter()
const route = useRoute()
const routes = router.options.routes

const activeMenu = computed(() => {
  const { meta, path } = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})
</script>
<style scoped lang="scss">

</style>
