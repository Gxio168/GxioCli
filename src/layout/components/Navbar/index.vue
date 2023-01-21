<template>
  <div class="content">
    <div class="navbar">
      <!-- 左侧 -->
      <div class="left-box">
        <hamburger-vue
          :isActive="sidebar.opened"
          class="hamburger-container"
          @toggle-click="toggleClick"
        />
        <breadcrumb-vue />
      </div>
      <!-- 右侧 -->
      <div class="right-box">
        <!-- 布局切换 -->
        <layout-switch-vue />
        <!-- 翻译 -->
        <translate-vue />
        <!-- 路径搜索 -->
        <search-path-vue />
        <!-- 皮肤切换等操作 -->
        <skin-switch-vue />
        <!-- 消息提示框 -->
        <bell-message-vue />
        <!-- 页面放大 -->
        <full-screen-vue />
        <!-- 头像加名称 -->
        <avator-vue />
      </div>
    </div>
    <div class="label-bar">
      <label-bar-vue />
    </div>
  </div>
</template>

<script setup lang="ts">
import avatorVue from './components/avator.vue'
import { useGlobalSystem } from '@/hooks/useGlobalSystem'

const { sidebar, toggleSidebar } = useGlobalSystem()

const toggleClick = () => {
  toggleSidebar()
}
</script>
<style scoped lang="scss">
.navbar {
  height: 50px;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .right-box {
    height: 100%;
    line-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:focus {
      outline: none;
    }
  }
  .left-box {
    margin-right: auto;
    .hamburger-container {
      line-height: 46px;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background 0.3s;
      -webkit-tap-highlight-color: transparent;

      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
    }
  }
}
</style>
