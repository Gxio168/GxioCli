<template>
  <section class="app-main">
    <el-scrollbar height="100%">
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <component :is="Component" :key="key" />
        </transition>
      </router-view>
    </el-scrollbar>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouterOrRoute } from '@/hooks/useRoute'
import { useChangeDark } from '@/hooks/useChangeDark'

const { bgColor, isDark } = useChangeDark()
const { route } = useRouterOrRoute()
const key = route.path

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
  padding: 10px;
  background-color: v-bind(appBgc);
}
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}
:deep(.el-scrollbar__view) {
  height: 100%;
  background-color: v-bind(bgColor);
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
