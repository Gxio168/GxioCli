<template>
  <div class="login-container">
    <el-form ref="loginForm"   class="login-form" :model="userInfo" >
      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>

      <el-form-item >
        <el-input v-model="userInfo.username" placeholder="Please input userName"></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input :type="passwordType" v-model="userInfo.password"  show-password     placeholder="Please input password"></el-input>
      </el-form-item>

      <el-button type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">Login</el-button>

      <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: any</span>
      </div>

    </el-form>
  </div>
  <el-input v-model="userInfo.password"></el-input>
</template>

<script  setup lang='ts'>
import { reactive, ref } from 'vue'
import axios from 'axios'

type User = {
  username: string,
  password: string
}
const userInfo = reactive<User>({
  username: '',
  password: ''
})

const passwordType=  ref('password')

const showPwd = () => {
  passwordType.value = passwordType.value === 'password' ? 'text' : 'password'
}

const handleLogin = () => {
  axios({
    url: '/api/login',
    method: 'post',
    data: userInfo
  }).then(res => {
    console.log(res.data);
  })
}

</script>


<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
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


N  .title-container {
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
    user-select: none;
  }
}
</style>
