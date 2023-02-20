<template>
  <div class="skin-swtich">
    <svg-icon-vue name="pifu" @click="handleToggleDrawer" />
    <el-drawer v-model="isVisible" direction="rtl" title="布局设置">
      <template #default>
        <el-scrollbar height="100%">
          <div
            class="theme-contain"
            v-for="theme in config"
            :key="theme.title"
            style="width: 300px"
          >
            <el-divider>
              <div class="title">
                <component :is="theme.icon" style="width: 12px; margin-right: 5px"></component>
                <span>{{ theme.title }}</span>
              </div>
            </el-divider>
            <div class="theme-item" v-for="item in theme.themeItem" :key="item.name">
              <span>{{ item.label }}</span>
              <el-color-picker
                :predefine="predefineColors"
                v-if="item.default === 'color-picker'"
                v-model="(storeData[item.name as unknown as string]).value"
              />
              <el-switch v-else v-model="storeData[item.name].value" />
            </div>
          </div>
        </el-scrollbar>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'

import config from './config'
import { useAppStore } from '@/stores/modules/app'

const appStore = useAppStore()
const storeData = storeToRefs(appStore) as any

const isVisible = ref(false)

const handleToggleDrawer = () => {
  isVisible.value = !isVisible.value
}

// 监视两个按钮的互斥作用
watch(
  () => appStore.isGrey,
  newVal => {
    if (newVal) {
      appStore.changeIsAchromatism()
    }
  }
)
watch(
  () => appStore.isAchromatism,
  newVal => {
    if (newVal) {
      appStore.changeIsGrey()
    }
  }
)

// 颜色选择器预设颜色
const predefineColors = ref([
  '#009688',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585'
])
</script>
<style scoped lang="scss">
.skin-swtich {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;
}
:deep(.el-drawer) {
  width: 300px !important;
}
.theme-contain {
  font-size: 12px;
  .title {
    display: flex;
    align-items: center;
  }
  .theme-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
  }
}
</style>
