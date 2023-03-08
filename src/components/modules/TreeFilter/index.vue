<script setup lang="ts">
import { reqGetDepartmentList } from '@/api/modules/list'
import type { ElTree } from 'element-plus'
interface IProps {
  title: string
  requestApi: string
  data: any
  id: string
  label: string
  multiple: boolean
  defaultValue: any
}
const props = withDefaults(defineProps<IProps>(), {
  id: 'id',
  label: 'label',
  multiple: false,
  defaultValue: ''
})

// tree 配置项
const defaultProps = {
  children: 'children',
  label: props.label
}

// 初始化 treeData 数据
const treeData = ref([]) as any
onMounted(async () => {
  if (props.data) {
    // 如果传入了对应的值
    treeData.value = props.data
  } else {
    // 没传入值
    const result = await reqGetDepartmentList(props.requestApi)
    treeData.value = result.data
  }
})

interface FilterEmits {
  (e: 'change', value: any): void
}
const emit = defineEmits<FilterEmits>()
const treeRef = ref<InstanceType<typeof ElTree>>()
// 负责单选
const handleNodeClick = (data: { [key: string]: any }) => {
  if (!props.multiple) {
    emit('change', data.id)
  }
}
// 负责多选的情况
const handleCheckChange = () => {
  const res = treeRef.value?.getCheckedKeys()
  emit('change', res)
}

// 控制关键字过滤
const searchKey = ref('')
watch(
  () => searchKey.value,
  (newKey: string) => {
    treeRef.value?.filter(newKey)
  }
)
const filterNode = (value: string, data: { [key: string]: any }, node: any) => {
  if (!value) return true
  // 处理父节点存在关键字但子节点无
  let parentNode = node.parent
  let labels = [node.label]
  let level = 1
  // 向外不断添加父节点的label 到 labels 数组中
  while (level < node.level) {
    labels = [...labels, parentNode.label]
    parentNode = parentNode.parent
    level++
  }
  return labels.some(label => label.indexOf(value) !== -1)
}
</script>
<template>
  <div class="box">
    <div class="header" v-if="title">{{ title }}</div>
    <el-input
      v-model="searchKey"
      placeholder="输入关键字进行过滤"
      clearable
      style="margin: 10px 0"
    />
    <el-scrollbar height="100%" style="width: 100%">
      <el-tree
        ref="treeRef"
        default-expand-all
        :node-key="id"
        :data="treeData"
        :show-checkbox="multiple"
        :check-strictly="false"
        :current-node-key="!multiple ? defaultValue : ''"
        :highlight-current="!multiple"
        :expand-on-click-node="false"
        :check-on-click-node="multiple"
        :props="defaultProps"
        :default-checked-keys="multiple ? defaultValue : []"
        @node-click="handleNodeClick"
        @check="handleCheckChange"
        :filter-node-method="filterNode"
      />
    </el-scrollbar>
  </div>
</template>

<style scoped lang="scss">
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    font-size: 18px;
    font-weight: bold;
    color: #73767a;
  }
}
:deep(.el-scrollbar__view) {
  border: none;
}
:deep(.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content) {
  background-color: var(--el-color-primary);
  color: white;
}
</style>
