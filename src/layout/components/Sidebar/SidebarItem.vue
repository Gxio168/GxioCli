<template>
  <div v-if="!item.hidden">
    <template
      v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <el-menu-item :index="resolvePath(onlyOneChild.path)" :route="resolvePath(onlyOneChild.path)">
        {{onlyOneChild.meta.title}}
      </el-menu-item>
    </template>
    <el-submenu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template #title v-if="item.meta">
        <span>{{item.meta.title}}</span>
      </template>
      <sidebar-item v-for="child in item.children" :key="child.path" :is-nest="true" :item="child"
        :base-path="resolvePath(child.path)" class="nest-menu" />
    </el-submenu>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { resolve } from 'path-browserify'

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
const resolvePath = (routePath) => {
  return resolve(props.basePath, routePath)
}
</script>
<style scoped lang='scss'>

</style>