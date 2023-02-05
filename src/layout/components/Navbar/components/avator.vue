<template>
  <div class="avator">
    <span class="username"> {{ authStore.userInfo.name }}</span>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img :src="avatar + '?imageView2/1/w/80/h/80'" class="user-avatar" />
        <i class="el-icon-caret-bottom" />
      </div>
      <template #dropdown>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item> 主页 </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-admin-template/">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
            <el-dropdown-item>Docs</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display: block">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/modules/auth'
import { storeToRefs } from 'pinia'
import { useRouterOrRoute } from '@/hooks/useRoute'

const { router } = useRouterOrRoute()
const authStore = useAuthStore()
const { avatar } = storeToRefs(authStore)

const logout = () => {
  authStore.logout()
  router.push({
    path: '/login'
  })
}
</script>
<style scoped lang="scss">
.avatar-container {
  margin-right: 30px;

  .avatar-wrapper {
    margin-top: 5px;
    position: relative;

    .user-avatar {
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }

    .el-icon-caret-bottom {
      cursor: pointer;
      position: absolute;
      right: -20px;
      top: 25px;
      font-size: 12px;
    }
  }
}
.username {
  font-size: 12px;
  margin: 0 10px;
}
</style>
