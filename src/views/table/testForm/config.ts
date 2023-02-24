import type { FormHeader, FormTable } from '@/types'
import type { FormRules } from 'element-plus'

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

// 表单内容
export const tableConfig: FormTable = [
  {
    type: 'avatar',
    label: '用户头像',
    prop: 'userAvatar',
    isHide: true,
    config: {
      id: 'upload1',
      type: 'avatar',
      url: '/api/upload',
      imageProps: 'userAvatar',
      limitSize: 3 * 1024 * 1024,
      tip: '头像大小不能超过 3M'
    }
  },
  {
    type: 'photo',
    label: '用户照片',
    prop: 'userPhoto',
    isHide: true,
    config: {
      id: 'upload2',
      type: 'picture',
      limitNums: 5,
      limitSize: 5 * 1024 * 1024,
      url: '/api/upload',
      imageProps: 'userPhoto',
      isRadius: false,
      tip: '照片大小不能超过 5M'
    }
  },
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

// 表单验证配置
export const rules: FormRules = {
  name: { required: true, message: '请输入姓名', trigger: 'blur' },
  sex: { required: true, message: '请输入性别', trigger: 'blur' },
  age: { required: true, message: '请输入年龄', trigger: 'blur' },
  id: { required: true, message: '请输入身份证号', trigger: 'blur' },
  email: { required: true, message: '请输入邮箱', trigger: 'blur' },
  location: { required: true, message: '请输入地址', trigger: 'blur' },
  userAvatar: { required: true, message: '请上传头像', trigger: 'blur' }
}
