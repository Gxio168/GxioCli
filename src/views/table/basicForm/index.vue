<template>
  <div clasas="basic-form">
    当前表头配置: <br />
    <template v-for="item in searchConfig">
      <el-tag type="success" size="large">{{ item }} </el-tag> <br />
    </template>
    <search-form-vue
      :config="searchConfig"
      @handle-search="handleSearch"
      @handle-reset="handleReset"
    />
    <el-card style="margin-top: 10px">
      <div class="table-head">
        <el-button icon="plus" type="primary">添加用户</el-button>
        <el-button icon="plus" type="primary" plain>批量添加用户</el-button>
        <el-button icon="plus" type="primary" plain>导出用户信息</el-button>
        <el-button icon="plus" type="danger" plain :disabled="true">批量删除数据</el-button>
      </div>
      <content-form-vue />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import searchFormVue from '../components/SearchForm/index.vue'
import contentFormVue from '../components/ContentForm/index.vue'
import { ElMessage } from 'element-plus'
const searchConfig = [
  { prop: 'name', label: '用户姓名', type: 'input' },
  {
    prop: 'gender',
    label: '性别',
    type: 'select',
    children: [
      { label: '男', value: 1 },
      { label: '女', value: 0 }
    ]
  },
  { prop: 'age', label: '年龄', type: 'input' },
  { prop: 'id', label: '身份证号', type: 'input' },
  {
    prop: 'status',
    label: '用户状态',
    type: 'select',
    children: [
      { label: '启用', value: true },
      { label: '禁用', value: false }
    ]
  },
  {
    prop: 'createTime',
    label: '创建时间',
    type: 'date',
    startPlaceHolder: '开始时间',
    endPlaceHolder: '结束时间'
  }
]

// 表头搜索
const handleSearch = (formData: any) => {
  ElMessage({
    type: 'success',
    message: formData
  })
}

// 表头重置
const handleReset = () => {
  ElMessage({
    type: 'success',
    message: '重置成功'
  })
}
</script>
<style scoped lang="scss">
.table-head {
  margin-bottom: 10px;
}
</style>
