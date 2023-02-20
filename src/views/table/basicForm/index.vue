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
    当前表格配置: <br />
    <template v-for="item in tableConfig">
      <el-tag type="success" size="large">{{ item }} </el-tag> <br />
    </template>
    <!-- 表单部分 -->
    <content-form-vue
      @handle-select-change="handleSeelctChange"
      :config="tableConfig"
      url="userList"
    >
      <!-- 自定义传递内容 -->
      <!-- 表头自定义内容 -->
      <template #tableHead>
        <el-button
          icon="plus"
          type="danger"
          plain
          :disabled="isDeleteBtnDisable"
          @click="handleDeleteData"
          >批量删除数据</el-button
        >
      </template>
      <!-- 表格内容 -->
      <template #sex="{ row }">
        <el-link :underline="false" type="primary" @click="handleShowTip">{{
          row.sex === 1 ? '男' : '女'
        }}</el-link>
      </template>
      <template #status="{ row }">
        <el-tag class="ml-2">{{ row.status ? '启用' : '禁用' }}</el-tag>
      </template>
    </content-form-vue>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import searchFormVue from '../components/SearchForm/index.vue'
import contentFormVue from '../components/ContentForm/index.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useListStore } from '@/stores/modules/list'

import { searchConfig, tableConfig } from './config'

const listStore = useListStore()

// 表头搜索事件
const handleSearch = (formData: any) => {
  ElMessage({
    type: 'success',
    message: formData
  })
}

// 表头重置事件
const handleReset = () => {
  ElMessage({
    type: 'success',
    message: '重置成功'
  })
}

// 表单内容部分
const selectedDatas = ref()
// 表单选择事件
const handleSeelctChange = (datas: Array<any>) => {
  datas.length ? (isDeleteBtnDisable.value = false) : (isDeleteBtnDisable.value = true)
  selectedDatas.value = datas.map(item => item.id)
}

// 移除选中的表单内容
const handleDeleteData = () => {
  ElMessageBox.confirm('是否删除所选用户信息?', '温馨提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      ElMessage({
        type: 'success',
        message: `删除${selectedDatas.value}`
      })
      listStore.deleteInfoList('userList', selectedDatas.value)
    })
    .catch(() => {})
}

// 消息提示
const handleShowTip = () => {
  ElMessage({
    message: '这是插槽渲染出来的',
    type: 'success'
  })
}

const isDeleteBtnDisable = ref(true)
</script>
<style scoped lang="scss"></style>
