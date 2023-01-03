import type { FormInstance, FormRules } from 'element-plus'
import { reactive } from 'vue'

export const authRules = reactive<FormRules>({
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 5, max: 12, message: '长度只能在 5 - 12', trigger: 'change' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 5, max: 12, message: '长度只能在 5 - 12', trigger: 'change' }
  ]
})
