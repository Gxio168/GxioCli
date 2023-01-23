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
import { useRouterOrRoute } from '@/hooks/useRoute'
import { useChangeDark } from '@/hooks/useChangeDark'

const { bgColor } = useChangeDark()
const { route } = useRouterOrRoute()
const key = route.path
</script>
<style lang="scss" scoped>
.app-main {
  background-color: v-bind(bgColor);
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: 10px;
}
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}
:deep(.el-scrollbar__view) {
  height: 100%;
  background-color: v-bind(bgColor);
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
