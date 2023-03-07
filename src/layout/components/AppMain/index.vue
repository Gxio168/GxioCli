<template>
  <div class="label-bar">
    <label-bar-vue />
  </div>
  <section class="app-main">
    <el-scrollbar height="100%">
      <router-view v-slot="{ Component }">
        <KeepAlive :include="authStore.getKeepAlivePaths" :max="10" v-if="isRouterRefresh">
          <transition name="fade-transform" mode="out-in">
            <component :is="Component" :key="key" />
          </transition>
        </KeepAlive>
      </router-view>
    </el-scrollbar>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '@/stores/modules/auth'
import { useRouterOrRoute } from '@/hooks/useRoute'
import { useChangeDark } from '@/hooks/useChangeDark'

const authStore = useAuthStore()
const { isDark } = useChangeDark()
const { route } = useRouterOrRoute()
const key = route.path

// 刷新当前页面
const isRouterRefresh = ref(true)
const refreshCurrentPage = () => {
  isRouterRefresh.value = false
  nextTick(function () {
    isRouterRefresh.value = true
  })
}

// 交由子组件进行处理
provide('refresh', refreshCurrentPage)

const appBgc = computed(() => {
  // 判断一下当前的主题背景
  if (!isDark.value) {
    return '#eef0f3'
  } else {
    return '#0d0d0d'
  }
})
</script>
<style lang="scss" scoped>
.app-main {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: v-bind(appBgc);
}
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}
:deep(.el-scrollbar__view) {
  height: 100%;
  border: 1px solid var(--el-border-color-light);
  border-radius: 5px;
  padding: 10px;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
