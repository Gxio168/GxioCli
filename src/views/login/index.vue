<template>
  <div class="login-container">
    <div class="login-form">
      <h3 class="title">Login Form</h3>
      <el-form :model="userInfo" :rules="rules" ref="ruleFormRef">
        <el-form-item prop="username" style="display: flex">
          <el-input
            prefix-icon="UserFilled"
            size="large"
            v-model="userInfo.username"
            placeholder="Please input userName"
            width="80"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="Lock"
            size="large"
            v-model="userInfo.password"
            show-password
            placeholder="Please input password"
          >
          </el-input>
        </el-form-item>
        <el-button
          size="large"
          type="primary"
          style="width: 100%; margin-bottom: 30px"
          @click="handleLogin(ruleFormRef)"
          >Login
        </el-button>

        <div class="tips">
          <span style="margin-right: 20px">username: admin</span>
          <span> password: any</span>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import type { UserInfo } from '@/type/index'
import { authRules } from '@/utils/validate'
import type { FormInstance } from 'element-plus'

import { useRouterOrRoute } from '@/hooks/useRoute'

const authStore = useAuthStore()
const { route, router } = useRouterOrRoute()

// 初始化用户信息
const userInfo = reactive<UserInfo>({
  username: '',
  password: ''
})

// 点击登录按钮触发登录
const handleLogin = async (formEl: FormInstance | undefined) => {
  await (formEl as FormInstance).validate(async valid => {
    if (valid) {
      const result = await authStore.login(userInfo)
      if (result.statusCode === 200) {
        router.push({
          path: (route.query.redirect as string) || '/'
        })
      }
    }
  })
}

// 表单元素
const ruleFormRef = ref<FormInstance>()
// 表单验证
const rules = authRules
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 450px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    .title {
      text-align: center;
      font-size: 24px;
      margin-bottom: 50px;
      color: #eeeeee;
    }
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  N .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
  }
}
.el-input {
  --el-input-bg-color: #283443;
  --el-input-text-color: white;
  --el-input-border-color: #3e4957;
  --el-input-focus-border: #3e4957;
  --el-input-hover-border-color: #3e4957;
  --el-input-focus-border-color: #3e4957;
  --el-input-height: 50px;
}
</style>
