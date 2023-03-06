<template>
  <el-drawer v-model="drawer" @closed="closePage" :title="title">
    <template #default>
      <el-scrollbar height="100%">
        <hr style="border-color: #ebeef5; margin-bottom: 10px" />
        <el-form class="form" :model="configItems" :rules="rules" ref="ruleFormRef">
          <!-- 用户传入配置 -->
          <el-form-item
            :label="item.label + ':'"
            label-width="100px"
            v-for="item in templateList"
            :prop="item.prop"
          >
            <!-- 输入框 -->
            <template v-if="item.type === 'input'">
              <el-input v-model="configItems[item.prop]" :disabled="disabled" />
            </template>
            <!-- 选择框 -->
            <template v-else-if="item.type === 'select'">
              <el-select
                :disabled="disabled"
                :placeholder="`请选择${item.label}`"
                style="width: 100%"
                v-model="configItems[item.prop]"
              >
                <el-option
                  v-for="option in item.children"
                  :label="option.label"
                  :value="option.value"
                />
              </el-select>
            </template>
            <template v-else-if="item.type === 'avatar'">
              <avatar-vue
                ref="avatarRef"
                v-bind="item.config"
                :disabled="disabled"
                :image-url="config[item.config.imageProps]"
                v-model="configItems[item.prop]"
              >
                <template #tip> {{ item.config.tip }} </template>
              </avatar-vue>
            </template>
            <template v-else-if="item.type === 'photo'">
              <avatar-vue
                ref="photoRef"
                v-bind="item.config"
                :disabled="disabled"
                :image-url="config[item.config.imageProps]"
                v-model="configItems[item.prop]"
              >
                <template #tip> {{ item.config.tip }} </template>
              </avatar-vue>
            </template>
          </el-form-item>
        </el-form>
      </el-scrollbar>
    </template>
    <template #footer>
      <div class="footer">
        <el-button @click="cancelClick">取消</el-button>
        <el-button type="primary" @click="confirmClick(ruleFormRef)" v-if="!disabled"
          >确定</el-button
        >
      </div>
    </template>
  </el-drawer>
</template>
<script lang="ts" setup>
import type { FormRules, FormInstance } from 'element-plus'
import avatarVue from '@/components/modules/UploadImg/index.vue'

interface Props {
  type: string // 当前打开模板的类型
  config: any // ===> 传入的信息
  template: any // ===> 模板
  close: any //  ===> 关闭侧边栏出发的事件
  rules?: FormRules // ====> 传入的 rule 验证规则
  confirmHandler: any
  cancelHandler: any
}

const props = defineProps<Props>()
console.log(props.rules)
const rules = reactive<FormRules>(props.rules as FormRules)
const drawer = ref(true)
const configItems = ref({}) as any
for (const key in props.config) {
  configItems.value[key] = props.config[key]
}

// 标题
const title = computed(() => {
  switch (props.type) {
    case 'get':
      return '查看用户'
    case 'edit':
      return '编辑用户'
    case 'add':
      return '新增用户'
  }
})

// 是否可以修改值
const disabled = computed(() => props.type === 'get')

const templateList = props.template.filter(
  (item: any) => item.canModify === undefined || item.canModify === true
)

// 取消按钮
const cancelClick = () => {
  props.cancelHandler()
  drawer.value = false
  setTimeout(() => {
    props.close()
  }, 200)
}

// 表单实例  头像实例  图片实例
const ruleFormRef = ref<FormInstance>()
const avatarRef = ref(null) as any
const photoRef = ref(null) as any
// 确定按钮
const confirmClick = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      props.confirmHandler(configItems)
      // 上传图片
      avatarRef.value.length && avatarRef.value[0].handleUpload()
      photoRef.value.length && photoRef.value[0].handleUpload()
      drawer.value = false
      setTimeout(() => {
        props.close()
      }, 200)
    }
  })
}
// 关闭页面
const closePage = () => {
  drawer.value = false
  props.cancelHandler()
  props.close()
}
</script>
<style scoped lang="scss">
.footer {
  padding: 10px 15px;
  border-top: #ccc 1px solid;
}
.form {
  padding: 0 10px;
}
:deep(.el-form-item__label) {
  font-weight: normal;
  color: #1d1b1b;
}
</style>
