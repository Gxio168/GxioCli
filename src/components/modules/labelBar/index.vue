<template>
  <div class="label-bar" v-if="labelBarOpen">
    <div class="label-list">
      <el-tabs
        tab-position="top"
        class="demo-tabs"
        type="card"
        @edit="handleLabelItemRemove"
        @tab-click="handleLabelItemClick"
        v-model="curPath"
      >
        <template v-for="(item, index) in labelbar" :key="item">
          <el-tab-pane :closable="index === 0 ? false : true" :name="item.path">
            <template #label>
              <component v-if="labelBarIconOpen" :is="item.icon" style="width: 14px"></component>
              {{ item.title }}
            </template>
          </el-tab-pane>
        </template>
      </el-tabs>
    </div>
    <div class="more">
      <el-dropdown trigger="click">
        <el-button type="primary" size="small">
          {{ $t('tabs.more') }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="remove" @click="handleLabelItemRemove(route.path)">
              <!-- 关闭当前 -->
              {{ $t('tabs.closeCurrent') }}</el-dropdown-item
            >
            <!-- 关闭其他 -->
            <el-dropdown-item icon="circleClose" @click="handleLabelItemCloseOther">
              {{ $t('tabs.closeOther') }}</el-dropdown-item
            >
            <!-- 关闭所有 -->
            <el-dropdown-item icon="FolderDelete" @click="handleLabelItemClear">
              {{ $t('tabs.closeAll') }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'

import { useRouterOrRoute } from '@/hooks/useRoute'
import { useGlobalSystem } from '@/hooks/useGlobalSystem'
import { HOME_PAGE } from '@/config'
import type { LabelItem } from '@/stores/interface'

const { route, router } = useRouterOrRoute()
const {
  labelbar,
  addToLabelbar,
  removeFromLabelbar,
  clearLabelbar,
  closeOthersLabelbar,
  labelBarIconOpen,
  labelBarOpen,
  themeColor
} = useGlobalSystem()

// 监视路由的变化，进行 tab 标签的增加
// 获取当前路由参数
const curPath = ref(route.path)
watch(
  () => route.fullPath,
  () => {
    curPath.value = route.path
    const labelItem: LabelItem = {
      path: route.path,
      title: route.meta.title as string,
      icon: route.meta.icon as string
    }
    addToLabelbar(labelItem)
  },
  {
    immediate: true
  }
)

// 标签点击
const handleLabelItemClick = (labelItem: any) => {
  router.push(labelItem.paneName)
}

// 标签移除
const handleLabelItemRemove = (path: any) => {
  // 确保不会删除主页标签
  if (path === HOME_PAGE.path) return
  // 移除标签
  removeFromLabelbar(path, route.path)
}

// 移除其他标签
const handleLabelItemCloseOther = () => {
  closeOthersLabelbar(route.path)
}
// 移出全部标签
const handleLabelItemClear = () => {
  clearLabelbar(route.path)
}
</script>

<style scoped lang="scss">
.label-bar {
  height: 40px;
  display: flex;
  align-items: center;
}
.label-list {
  width: 90%;
}

.label-item {
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
}
.more {
  margin-left: auto;
  margin-right: 10px;
}
.el-tabs__content {
  display: none;
}
:deep(.el-tabs__nav) {
  border: none !important;
}
:deep(.el-tabs__header) {
  margin: 0 !important;
}
:deep(.el-tabs__item.is-active) {
  border-bottom: 2px solid v-bind(themeColor) !important;
}
:deep(.el-tabs__item) {
  border: none !important;
}

:deep(.el-tabs__new-tab) {
  display: none;
}
</style>
