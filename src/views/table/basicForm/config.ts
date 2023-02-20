import type { FormHeader, FormTable } from '@/types'

// 搜索栏配置项
export const searchConfig: FormHeader = [
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

export const tableConfig: FormTable = [
  {
    type: 'input',
    label: '姓名',
    prop: 'name'
  },
  {
    type: 'select',
    label: '性别',
    prop: 'sex',
    slotName: 'sex',
    children: [
      { label: '男', value: 1 },
      { label: '女', value: 0 }
    ]
  },
  {
    type: 'input',
    label: '年龄',
    prop: 'age'
  },
  {
    type: 'input',
    label: '身份证号',
    prop: 'id'
  },
  {
    type: 'input',
    label: '邮箱',
    prop: 'email'
  },
  {
    type: 'input',
    label: '居住地',
    prop: 'location'
  },
  {
    label: '用户状态',
    prop: 'status',
    slotName: 'status',
    canModify: false
  },
  {
    label: '创建时间',
    prop: 'createTime',
    canModify: false
  }
]
