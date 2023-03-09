<script setup lang="ts">
import { storeToRefs } from 'pinia'
import mittBus from '@/config/mitt'

import config from './config'
import { useAppStore } from '@/stores/modules/app'

const appStore = useAppStore()
const storeData = storeToRefs(appStore) as any

const isVisible = ref(false)

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

// 全局事件总线
mittBus.on('openThemeDrawer', () => {
  isVisible.value = true
})

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

<template>
  <el-drawer v-model="isVisible" direction="rtl" title="布局设置" size="300px">
    <template #default>
      <el-scrollbar height="100%">
        <!-- 布局切换 -->
        <el-divider>
          <div class="title">
            <component is="Notification" style="width: 12px; margin-right: 5px"></component>
            <span>布局切换</span>
          </div>
        </el-divider>
        <div class="layout-switch">
          <el-tooltip effect="dark" content="纵向" placement="top" :show-after="200">
            <div
              :class="[
                'layout-item',
                ' layout-vertical',
                appStore.layoutTheme === 'vertical' ? 'is-active' : ''
              ]"
              @click="appStore.switchLayoutTheme('vertical')"
            >
              <div class="layout-dark"></div>
              <div class="layout-container">
                <div class="layout-light"></div>
                <div class="layout-content"></div>
              </div>
              <el-icon class="icon" v-if="appStore.layoutTheme === 'vertical'">
                <CircleCheckFilled />
              </el-icon>
            </div>
          </el-tooltip>
          <el-tooltip effect="dark" content="经典" placement="top" :show-after="200">
            <div
              :class="[
                'layout-item',
                ' layout-classic',
                appStore.layoutTheme === 'classic' ? 'is-active' : ''
              ]"
              @click="appStore.switchLayoutTheme('classic')"
            >
              <div class="layout-dark"></div>
              <div class="layout-container">
                <div class="layout-light"></div>
                <div class="layout-content"></div>
              </div>
              <el-icon class="icon" v-if="appStore.layoutTheme === 'classic'">
                <CircleCheckFilled />
              </el-icon>
            </div>
          </el-tooltip>
          <el-tooltip effect="dark" content="横向" placement="top" :show-after="200">
            <div
              :class="[
                'layout-item',
                ' layout-transverse',
                appStore.layoutTheme === 'transverse' ? 'is-active' : ''
              ]"
              @click="appStore.switchLayoutTheme('transverse')"
            >
              <div class="layout-dark"></div>
              <div class="layout-content"></div>
              <el-icon class="icon" v-if="appStore.layoutTheme === 'transverse'">
                <CircleCheckFilled />
              </el-icon>
            </div>
          </el-tooltip>
          <el-tooltip effect="dark" content="分栏" placement="top" :show-after="200">
            <div
              :class="[
                'layout-item',
                ' layout-columns',
                appStore.layoutTheme === 'columns' ? 'is-active' : ''
              ]"
              @click="appStore.switchLayoutTheme('columns')"
            >
              <div class="layout-dark"></div>
              <div class="layout-light"></div>
              <div class="layout-content"></div>
              <el-icon class="icon" v-if="appStore.layoutTheme === 'columns'">
                <CircleCheckFilled />
              </el-icon>
            </div>
          </el-tooltip>
        </div>
        <!-- 主题和页面设计 -->
        <div class="theme-contain" v-for="theme in config" :key="theme.title" style="width: 300px">
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
              v-model="storeData[item.name].value"
            />
            <el-switch v-else v-model="storeData[item.name].value" />
          </div>
        </div>
      </el-scrollbar>
    </template>
  </el-drawer>
</template>

<style scoped lang="scss">
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

.layout-switch {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: space-around;
  .layout-item {
    position: relative;
    box-sizing: border-box;
    padding: 6px;
    width: 95px;
    height: 67px;
    margin-bottom: 20px;
    border-radius: 5px;
    transition: all 0.2s;
    cursor: pointer;
    border: 3px solid rgba($color: #514f4f, $alpha: 0.1);
    &:hover {
      box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
    }
    &.is-active {
      border-color: var(--el-color-primary);
    }
    &.layout-vertical {
      display: flex;
      justify-content: space-around;
      .layout-dark {
        width: 23%;
        height: 100%;
      }
      .layout-container {
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .layout-light {
          width: 100%;
          height: 23%;
        }
        .layout-content {
          width: 100%;
          height: 65%;
        }
      }
    }
    &.layout-classic {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .layout-dark {
        width: 100%;
        height: 23%;
      }
      .layout-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 70%;
      }
      .layout-light {
        width: 23%;
        height: 100%;
      }
      .layout-content {
        width: 70%;
        height: 100%;
      }
    }
    &.layout-transverse {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .layout-dark {
        height: 23%;
        width: 100%;
      }
      .layout-content {
        height: 70%;
        width: 100%;
      }
    }
    &.layout-columns {
      display: flex;
      justify-content: space-between;
      .layout-dark {
        height: 100%;
        width: 17%;
      }
      .layout-light {
        height: 100%;
        width: 23%;
      }
      .layout-content {
        height: 100%;
        width: 50%;
      }
    }
  }
}
.layout-dark {
  background-color: var(--el-color-primary);
  border-radius: 3px;
}
.layout-light {
  background-color: var(--el-color-primary-light-5);
  border-radius: 3px;
}
.layout-content {
  background-color: var(--el-color-primary-light-8);
  border-radius: 3px;
  border: 1px dashed var(--el-color-primary);
  width: 10px;
  height: 10px;
}

.icon {
  position: absolute;
  color: var(--el-color-primary);
  right: 10px;
  bottom: 10px;
}
</style>
