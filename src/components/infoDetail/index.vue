<template>
  <el-drawer v-model="drawer" @closed="closePage" :title="title">
    <template #default>
      <el-scrollbar height="100%">
        <hr style="border-color: #ebeef5; margin-bottom: 10px" />
        <el-form class="form">
          <el-form-item label="用户头像:" label-width="100px">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="用户照片:" label-width="100px">
            <el-input />
          </el-form-item>
          <el-form-item :label="item.label + ':'" label-width="100px" v-for="item in templateList">
            <template v-if="item.type === 'input'">
              <el-input />
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select :placeholder="`请选择${item.label}`" style="width: 100%">
                <el-option
                  v-for="option in item.children"
                  :label="option.label"
                  :value="option.value"
                />
              </el-select>
            </template>
          </el-form-item>
        </el-form>
      </el-scrollbar>
    </template>
    <template #footer>
      <div class="footer">
        <el-divider></el-divider>
        <el-button @click="cancelClick">取消</el-button>
        <el-button type="primary" @click="confirmClick">确定</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

interface Props {
  type: string
  config: any
  template: any
  close: any
  confirmHandler: any
  cancelHandler: any
}
const props = defineProps<Props>()

const drawer = ref(true)
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

const templateList = props.template.filter(
  item => item.canModify === undefined || item.canModify === true
)

// 取消按钮
const cancelClick = () => {
  props.cancelHandler()
  drawer.value = false
  setTimeout(() => {
    props.close()
  }, 200)
}

// 确定按钮
const confirmClick = () => {
  props.confirmHandler()
  drawer.value = false
  setTimeout(() => {
    props.close()
  }, 200)
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
  margin: 15px 10px;
}
.form {
  padding: 0 10px;
}
:deep(.el-form-item__label) {
  font-weight: normal;
  color: #1d1b1b;
}
</style>
