<script setup lang="ts" name="Btn">
import { useBtnPermisson } from '@/hooks/useBtnPermisson'
import { useChangeDark } from '@/hooks/useChangeDark'

const { bgColor } = useChangeDark()
const { btnAdd, btnDelete, btnSearch, btnUpdate } = useBtnPermisson()
</script>
<template>
  <page-content-vue>
    <template #title>按钮权限 🍓🍇🍐🍉</template>
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
  </page-content-vue>
</template>

<style scoped lang="scss">
button.el-button {
  --el-button-text-color: v-bind(bgColor) !important;
  --el-button-hover-text-color: v-bind(bgColor) !important;
}
</style>
