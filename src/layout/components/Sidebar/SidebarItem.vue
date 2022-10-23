<template>
  <template v-if="!item.hidden">
    <template
      v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <el-menu-item :index="resolvePath(onlyOneChild.path)" :route="resolvePath(onlyOneChild.path)"
        :class="{'submenu-title-noDropdown':!isNest}">
        <el-icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-394d1fd8="">
            <path fill="currentColor"
              d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z">
            </path>
          </svg>
        </el-icon>
        <template #title>
          <span>{{onlyOneChild.meta.title}}</span>
        </template>
      </el-menu-item>
    </template>
    <el-sub-menu v-else :index="resolvePath(item.path)">
      <template #title>
        <el-icon>
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
            <path fill="currentColor"
              d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z">
            </path>
          </svg>
        </el-icon>
        <span>{{item.meta.title}}</span>
      </template>
      <SidebarItem v-for="child in item.children" :key="child.path" :is-nest="true" :item="child" class="nest-menu"
        :base-path="resolvePath(child.path)" />
    </el-sub-menu>
  </template>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { resolve } from 'path-browserify'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const appStore = useAppStore()

type Props = {
  item: any,
  basePath: string,
  isNest?: Boolean
}
const props = defineProps<Props>()
const onlyOneChild = ref(null) as any
const hasOneShowingChild = (children: Array<any> = [], parent: any): boolean => {
  // 对所有孩子路由进行遍历
  const showingChildren = children.filter(item => {
    if (item.hidden) {
      return false
    } else {
      onlyOneChild.value = item
      return true
    }
  })
  // 如果孩子路由的长度是1, 表明当前子路由是唯一的路由
  if (showingChildren.length === 1) {
    return true
  }
  // 如果不存在子路由
  if (showingChildren.length === 0) {
    onlyOneChild.value = { ...parent, path: '', noShowingChildren: true }
    return true
  }
  return false
}
const resolvePath = (routePath: string) => {
  return resolve(props.basePath, routePath)
}
</script>
<style scoped lang='scss'>

</style>