<template>
  <div class="skin-swtich">
    <svg-icon-vue name="pifu" @click="handleToggleDrawer" />
    <el-drawer v-model="isVisible" direction="rtl" title="布局设置" style="width: 300px">
      <template #default>
        <el-scrollbar height="100%">
          <div class="theme-contain" v-for="theme in config" :key="theme.title">
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
                v-model="appStore[item.name]"
              />
              <el-switch v-else v-model="appStore[item.name]" />
            </div>
          </div>
        </el-scrollbar>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import config from './config'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

const isVisible = ref(false)

const handleToggleDrawer = (value: boolean = true) => {
  isVisible.value = value
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

// 预设颜色
const predefineColors = ref([
  '#ff4500',
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
