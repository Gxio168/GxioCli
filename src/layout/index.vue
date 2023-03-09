<script setup lang="ts">
import { useAppStore } from '@/stores/modules/app'
const appStore = useAppStore()
const themeConfig = computed(() => appStore.layoutTheme)
const LayoutComponents: { [key: string]: any } = {
  vertical: defineAsyncComponent(() => import('./LayoutVertical/index.vue')),
  classic: defineAsyncComponent(() => import('./LayoutClassic/index.vue')),
  transverse: defineAsyncComponent(() => import('./LayoutTransverse/index.vue')),
  columns: defineAsyncComponent(() => import('./LayoutColumns/index.vue'))
}
</script>
<template>
  <suspense>
    <template #default>
      <component :is="LayoutComponents[themeConfig]"></component>
    </template>
    <template #fallback></template>
  </suspense>
  <theme-drawer-vue />
</template>

<style scoped lang="scss"></style>
