<template>
  <!-- table 表格 -->
  <el-card style="margin-top: 10px">
    <div class="table-head">
      <el-button icon="plus" type="primary" @click="handleAddUser">新增用户</el-button>
      <el-button icon="plus" type="primary" plain>批量添加用户</el-button>
      <el-button icon="plus" type="primary" plain>导出用户信息</el-button>
      <slot name="tableHead" />
    </div>

    <el-table
      style="width: 100%"
      class="table"
      border
      max-height="300"
      :data="userList"
      header-cell-class-name="table-head"
      @selection-change="handleSelectChange"
    >
      <el-table-column fixed type="selection" align="center" width="50" />
      <el-table-column type="index" label="#" show-overflow-tooltip align="center" width="80" />
      <template v-for="item in config">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          width="100"
          show-overflow-tooltip
          align="center"
        >
          <template #default="{ row }" v-if="item.slotName">
            <slot :name="item.slotName" :row="row"></slot>
          </template>
        </el-table-column>
      </template>
      <el-table-column fixed="right" label="操作" min-width="280" align="center">
        <template #default="{ row }">
          <div style="display: flex; justify-content: space-evenly">
            <el-button link icon="view" type="primary" @click="handleGetInfo(row)">
              查看
            </el-button>
            <el-button link icon="edit" type="primary" @click="handleEditInfo(row)">
              编辑
            </el-button>
            <el-button link icon="delete" type="primary" @click="handleDeleteInfo(row)">
              删除
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 底部 分页器 -->
    <el-pagination
      style="justify-content: flex-end; margin-top: 10px"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50, 100]"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="2000"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useListStore } from '@/stores/modules/list'
import { infoDetail } from '@/components'
import { getStaticData } from '../../helper'

import type { FormTable } from '@/types'

interface Props {
  config: FormTable
  url: string
}

const props = defineProps<Props>()
const emit = defineEmits(['handleSelectChange', 'handlePageSizeChange'])

const listStore = useListStore()
const { userList } = storeToRefs(listStore)

onMounted(async () => {
  listStore.getInfoList(props.url)
})

// 分页器事件
const currentPage = ref(1)
const pageSize = ref(10)

// size 改变触发
const handleSizeChange = () => {
  emit('handlePageSizeChange', pageSize.value)
  listStore.getInfoList(props.url, pageSize.value, (currentPage.value - 1) * pageSize.value)
}
// curPage 改变触发
const handleCurrentChange = () => {
  listStore.getInfoList(props.url, pageSize.value, (currentPage.value - 1) * pageSize.value)
}

// 表单选择事件
const handleSelectChange = (val: any) => {
  emit('handleSelectChange', val)
}

// 新增用户
const handleAddUser = () => {
  infoDetail('add', props.config, getStaticData(props.config)).then(
    (res: any) => {
      listStore.updateInfoList(props.url, res.value)
    },
    err => {}
  )
}

// 获取表单一行的具体内容
const handleGetInfo = (row: any) => {
  // 无需其他操作
  infoDetail('get', props.config, row).then(
    res => {},
    err => {}
  )
}

// 编辑信息
const handleEditInfo = (row: any) => {
  infoDetail('edit', props.config, row).then(
    (res: any) => {
      listStore.updateInfoList(props.url, res.value)
    },
    err => {}
  )
}

// 删除一行中的内容
const handleDeleteInfo = (row: any) => {
  listStore.deleteInfoList(props.url, [row.id])
}
</script>
<style scoped lang="scss">
.table-head {
  margin-bottom: 10px;
}
:deep(.el-scrollbar__view) {
  padding: 0;
  margin: none;
}

:deep(.table-head .cell) {
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
