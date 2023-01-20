<template>
  <section class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" :key="key" />
      </transition>
    </router-view>
  </section>
</template>

<script setup lang="ts">
import { useRouterOrRoute } from '@/hooks/useRoute'
const { route } = useRouterOrRoute()
const key = route.path
</script>
<style scoped>
.app-main {
  background-color: #eff1f4;
  width: 100%;
  height: 93%;
  position: relative;
  overflow: hidden;
  padding: 10px;
}
</style>
<style lang="scss" scoped>
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
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
