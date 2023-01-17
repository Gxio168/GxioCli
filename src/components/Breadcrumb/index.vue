<template>
  <el-breadcrumb separator="/" class="app-breadcrumb">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <!-- 如果 路由中的 redirect === 'noRedirect' 或者当前路由是路由数组的最后一个路由时，用 span 来表示，禁止跳转 -->
        <!-- 实际上没有给 redirect 参数， 只要路由是最后一个路由就禁止跳转 -->
        <template v-if="item.redirect === 'noRedirect' || index == levelList.length - 1">
          <el-button link :icon="item.meta.icon">{{ item.meta.title }}</el-button>
          <!-- <span class="no-redirect">
            {{ item.meta.title }}
          </span> -->
        </template>
        <!-- 其他情况下运行进行路由跳转 -->
        <el-button v-else link :icon="item.meta.icon" @click.prevent="handleLink(item)">{{
          item.meta.title
        }}</el-button>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref, onBeforeMount, watch } from 'vue'

const levelList = ref(null) as any

const route = useRoute()
const router = useRouter()

// 页面初次加载
onBeforeMount(() => {
  getBreadcrumb()
})
// 监视路由的变化
watch(route, () => {
  getBreadcrumb()
})

// 获取面包屑中要显示的路由
const getBreadcrumb = () => {
  let matched = route.matched.filter(item => item.meta && item.meta.title)
  const fitst = matched[0]
  // 如果第一个匹配到的路由不是 Dashboard
  if (!isDashboard(fitst)) {
    // 向匹配到的路由的开头补上 Dashboard
    matched = [{ path: '/dashboard', meta: { title: '首页', icon: 'home-filled' } }].concat(
      matched as any
    ) as any
  }
  // 匹配出所有包含 title 的路由
  levelList.value = matched.filter(
    item => item.meta && item.meta.title && item.meta.breadcrumb !== false
  )
}
// 判断当前路由的名称是否是 Dashboard
const isDashboard = (route: any) => {
  const name = route && (route.name as string)
  if (!name) return false
  return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
}

const pathCompile = (path: string) => {
  return path
}

const handleLink = (item: any) => {
  const { redirect, path } = item
  if (redirect) {
    // 如果点击的路由是 sub-menu 中的路由时，则自动跳转到这个路由的默认重定向路由
    router.push(redirect)
    return
  }
  // 如果当前路由并不存在 redirect 属性，走这里
  router.push(pathCompile(path))
}
</script>
<style scoped lang="scss">
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}

/* breadcrumb transition */
.breadcrumb-move,
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s ease;
}

.breadcrumb-enter-from,
.breadcrumb-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
