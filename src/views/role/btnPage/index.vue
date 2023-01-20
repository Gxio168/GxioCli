<template>
  <div class="btn-page">
    <el-tag type="success" size="large"
      >当前用户权限:{{ { btnAdd, btnDelete, btnSearch, btnUpdate } }}</el-tag
    >
    <br />
    <el-button color="#009688" icon="circlePlus" v-if="btnAdd">添加</el-button>
    <el-button color="#e6a23c" icon="edit" v-if="btnUpdate">编辑</el-button>
    <el-button color="#f56c6c" icon="delete" v-if="btnDelete">删除</el-button>
    <el-button type="primary" icon="search" v-if="btnSearch">查询</el-button>
  </div>
</template>

<script setup lang="ts">
import { useBtnPermisson } from '@/hooks/useBtnPermisson'
const { btnAdd, btnDelete, btnSearch, btnUpdate } = useBtnPermisson()
// console.log(a)
</script>
<style scoped lang="scss">
.btn-page {
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 0 10px 1px rgba($color: #000000, $alpha: 0.1);
  padding: 10px;
}
button.el-button {
  --el-button-text-color: white !important;
  --el-button-hover-text-color: white !important;
}
</style>
