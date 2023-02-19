<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    max-height="300"
    border
    header-cell-class-name="table-head"
    class="table"
  >
    <el-table-column fixed type="selection" width="80" />
    <el-table-column type="index" label="#" show-overflow-tooltip align="center" width="80" />
    <el-table-column prop="name" label="姓名" show-overflow-tooltip align="center" width="100" />
    <el-table-column prop="sex" label="性别" show-overflow-tooltip align="center" width="100">
      <template #default="{ row }"> {{ row.sex === 1 ? '男' : '女' }} </template>
    </el-table-column>
    <el-table-column prop="age" label="年龄" show-overflow-tooltip align="center" width="100" />
    <el-table-column prop="id" label="身份证号" show-overflow-tooltip align="center" width="100" />
    <el-table-column prop="email" label="邮箱" show-overflow-tooltip align="center" width="100" />
    <el-table-column
      prop="location"
      label="居住地"
      show-overflow-tooltip
      align="center"
      width="100"
    />
    <el-table-column
      prop="status"
      label="用户状态"
      show-overflow-tooltip
      align="center"
      width="100"
    >
      <template #default="{ row }">
        <el-switch v-model="row.status" />
        {{ row.status ? '启用' : '禁用' }}
      </template>
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="创建时间"
      show-overflow-tooltip
      align="center"
      width="180"
    />
    <el-table-column fixed="right" label="Operations" width="280">
      <template #default="scope">
        <div style="display: flex; justify-content: space-evenly">
          <el-button link icon="view" type="primary" size="small"> 查看 </el-button>
          <el-button link icon="edit" type="primary" size="small"> 编辑 </el-button>
          <el-button link icon="delete" type="primary" size="small"> 删除 </el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
  <!-- 底部 分页器 -->
  <el-pagination
    style="justify-content: flex-end; margin-top: 10px"
    v-model:current-page="currentPage4"
    v-model:page-size="pageSize4"
    :page-sizes="[10, 20, 50, 100]"
    :small="small"
    :disabled="disabled"
    background
    layout="total, sizes, prev, pager, next, jumper"
    :total="2000"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentPage4 = ref(4)
const pageSize4 = ref(100)
const small = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
const tableData = [
  {
    name: 'Ava',
    sex: 0,
    age: 18,
    id: 3318292745892738,
    email: '293921@qq.com',
    location: '江西南昌',
    status: true,
    createTime: '2023-01-12 03:33:45'
  },
  {
    name: 'Ava',
    sex: 1,
    age: 18,
    id: 3318292745892738,
    email: '293921@qq.com',
    location: '江西南昌',
    status: true,
    createTime: '2023-01-12 03:33:45'
  },
  {
    name: 'Ava',
    sex: 1,
    age: 18,
    id: 3318292745892738,
    email: '293921@qq.com',
    location: '江西南昌',
    status: true,
    createTime: '2023-01-12 03:33:45'
  },
  {
    name: 'Ava',
    sex: 1,
    age: 18,
    id: 3318292745892738,
    email: '293921@qq.com',
    location: '江西南昌',
    status: true,
    createTime: '2023-01-12 03:33:45'
  },
  {
    name: 'Ava',
    sex: 1,
    age: 18,
    id: 3318292745892738,
    email: '293921@qq.com',
    location: '江西南昌',
    status: true,
    createTime: '2023-01-12 03:33:45'
  },
  {
    name: 'Ava',
    sex: 1,
    age: 18,
    id: 3318292745892738,
    email: '293921@qq.com',
    location: '江西南昌',
    status: true,
    createTime: '2023-01-12 03:33:45'
  },
  {
    name: 'Ava',
    sex: 1,
    age: 18,
    id: 3318292745892738,
    email: '293921@qq.com',
    location: '江西南昌',
    status: true,
    createTime: '2023-01-12 03:33:45'
  },
  {
    name: 'Ava',
    sex: 1,
    age: 18,
    id: 3318292745892738,
    email: '293921@qq.com',
    location: '江西南昌',
    status: true,
    createTime: '2023-01-12 03:33:45'
  },
  {
    name: 'Ava',
    sex: 1,
    age: 18,
    id: 3318292745892738,
    email: '293921@qq.com',
    location: '江西南昌',
    status: true,
    createTime: '2023-01-12 03:33:45'
  },
  {
    name: 'Ava',
    sex: 1,
    age: 18,
    id: 3318292745892738,
    email: '293921@qq.com',
    location: '江西南昌',
    status: true,
    createTime: '2023-01-12 03:33:45'
  }
]
</script>
<style scoped lang="scss">
:deep(.el-scrollbar__view) {
  padding: 0;
}
.table {
  text-align: center;
}

:deep(.table-head .cell) {
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
