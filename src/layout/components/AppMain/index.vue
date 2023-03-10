<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '@/stores/modules/auth'
import { useRouterOrRoute } from '@/hooks/useRoute'
import { useChangeDark } from '@/hooks/useChangeDark'
import { useGlobalSystem } from '@/hooks/useGlobalSystem'

const authStore = useAuthStore()
const { isDark, bgColor } = useChangeDark()
const { route } = useRouterOrRoute()
// 控制页脚的展示
const { footerOpen } = useGlobalSystem()
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

// 切换背景色
const appBgc = computed(() => {
  // 判断一下当前的主题背景
  if (!isDark.value) {
    return '#eef0f3'
  } else {
    return '#0d0d0d'
  }
})
</script>

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
    <footer class="app-footer" v-if="footerOpen">2023 © Gxio-Admin By Gxio.</footer>
  </section>
</template>

<style lang="scss" scoped>
.label-bar {
  background-color: v-bind(bgColor);
}
.app-main {
  position: relative;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: v-bind(appBgc);
}
.app-footer {
  background-color: v-bind(bgColor);
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  color: #aaa;
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
