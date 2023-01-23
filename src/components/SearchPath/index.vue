<template>
  <div class="search-path">
    <svg-icon-vue name="sousuo" @click="handleOpenMessage" />
    <teleport to="body">
      <message-box-vue v-model:isVisible="isVisible" @update:isVisibel="handleOpenMessage">
        <div class="input-box">
          <el-autocomplete
            v-model="state"
            :fetch-suggestions="querySearch"
            popper-class="my-autocomplete"
            placeholder="菜单搜索 ：支持菜单名称、路径"
            @select="handleSelect"
            prefix-icon="search"
            ref="autocomplete"
          >
            <template #default="{ item }">
              <div class="check-item">
                <component :is="item.meta.icon" style="width: 16px; margin-right: 10px"></component>
                <span class="link">{{ item.meta.title }}</span>
              </div>
            </template>
          </el-autocomplete>
        </div>
      </message-box-vue>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouterOrRoute } from '@/hooks/useRoute'
import type { AutocompleteInstance } from 'element-plus'

const { router } = useRouterOrRoute()

const routes = router.getRoutes().filter((item: any) => item.meta.icon)

const state = ref('')

// 匹配字符串
const querySearch = (queryString: string, cb: Function) => {
  const results = queryString ? routes.filter(createFilter(queryString)) : routes
  cb(results)
}
// 匹配规则, 匹配 route.meta.title 和 route.path
const createFilter = (queryString: any) => {
  return (route: any) => {
    return (
      route.meta.title.toLowerCase().indexOf(queryString.toLowerCase()) !== -1 ||
      route.path.toLowerCase().indexOf(queryString.toLowerCase()) !== -1
    )
  }
}
const handleSelect: any = (item: any) => {
  router.push(item.path)
  isVisible.value = false
}

const isVisible = ref(false)

const handleOpenMessage = (value: boolean = true) => {
  // 如果即将显示，处理 input 的聚焦
  if (value) {
    setTimeout(() => {
      autocomplete.value?.focus()
    }, 200)
  }
  isVisible.value = value
}

// 获取 DOM 节点
const autocomplete = ref<AutocompleteInstance>()
</script>
<style scoped lang="scss">
.search-path {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;
}
.input-box {
  width: 500px;
}
:deep(.el-autocomplete) {
  width: 100%;
}

.check-item {
  display: flex;
  align-items: center;
}
</style>
