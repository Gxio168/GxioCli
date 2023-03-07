<script setup lang="ts" name="TestTable">
import formContentVue from '../components/FormContent/index.vue'
import formSearchVue from '../components/FormSearch/index.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useListStore } from '@/stores/modules/list'

import { searchConfig, tableConfig, rules } from './config'

const listStore = useListStore()

const curPage = ref(10)
// 表头搜索事件  自定义处理逻辑
const handleSearch = (formData: any) => {
  listStore.putInfoList('userList', curPage.value, formData)
  ElMessage({
    type: 'success',
    message: formData
  })
}

// 获取当前一页显示的个数,方便发送请求， 交由用户处理
const handlePageSizeChange = (size: number) => {
  curPage.value = size
}

// 表头重置事件， 交由用户处理
const handleReset = () => {
  ElMessage({
    type: 'success',
    message: '重置成功'
  })
}

// 表单内容部分 自定义
const selectedDatas = ref()
const isDeleteBtnDisable = ref(true)
// 表单选择事件
const handleSelectChange = (datas: Array<any>) => {
  datas.length ? (isDeleteBtnDisable.value = false) : (isDeleteBtnDisable.value = true)
  selectedDatas.value = datas.map(item => item.id)
}
// 移除选中的表单内容（自定义）
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

// 消息提示（自定义）
const handleShowTip = () => {
  ElMessage({
    message: '这是插槽渲染出来的',
    type: 'success'
  })
}
</script>

<template>
  <div class="basic-form">
    <form-search-vue
      :config="searchConfig"
      @handle-search="handleSearch"
      @handle-reset="handleReset"
    />
    <!-- 表单部分 -->
    <form-content-vue
      @handle-select-change="handleSelectChange"
      @handle-page-size-change="handlePageSizeChange"
      :config="tableConfig"
      :rules="rules"
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
    </form-content-vue>
  </div>
</template>

<style scoped lang="scss">
.basic-form {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
