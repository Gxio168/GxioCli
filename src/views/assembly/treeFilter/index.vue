<script setup lang="ts" name="TreeFilter">
import { reqGetDepartmentList } from '@/api/modules/list'
import { ElMessage } from 'element-plus'
const config: any[] = [
  { label: 'requestApi', text: '请求分类数据的 api' },
  { label: 'data', text: '分类数据，如果有分类数据，则不会执行 api 请求' },
  { label: 'title', text: '	treeFilter 标题' },
  { label: 'id', text: '选择的id，默认为 “id”' },
  { label: 'label', text: '显示的label，默认为 “label”' },
  { label: 'multiple', text: '是否为多选，默认为 false' },
  { label: 'defaultValue', text: '默认选中的值' }
]

// 出现了问题,一个页面不能同时对一个接口发送两次请求,不然第一次请求会被拦截并取消,导致会存在一次请求拿不到值
const data = ref([]) as any
onMounted(async () => {
  const result = await reqGetDepartmentList('department')
  data.value = result.data
})

const getClickedDepartment1 = (id: string) => {
  ElMessage({
    type: 'success',
    message: `你选择了 id 为 ${id} 的数据🤔`
  })
}
const getClickedDepartment2 = (ids: string[]) => {
  ElMessage({
    type: 'success',
    message: `你选择了 id 为{ ${ids} }的数据🤔`
  })
}
</script>
<template>
  <div class="box">
    <div class="single">
      <page-content-vue>
        <tree-filter-vue
          title="部门列表(单选)"
          :multiple="false"
          :data="data"
          default-value="1"
          label="name"
          @change="getClickedDepartment1"
        />
      </page-content-vue>
    </div>
    <div class="multiple">
      <page-content-vue>
        <tree-filter-vue
          title="部门列表(多选)"
          :multiple="true"
          :data="data"
          :default-value="['11']"
          label="name"
          @change="getClickedDepartment2"
        />
      </page-content-vue>
    </div>
    <div class="descriptor">
      <page-content-vue>
        <template #title>树形筛选器 🍓🍇🍈🍉</template>
        <descriptions-vue title="配置项 📚" :config="config" />
      </page-content-vue>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  width: 100%;
  height: 100%;
  display: flex;
  .single {
    margin-right: 10px;
    height: 100%;
    width: 220px;
  }
  .multiple {
    margin-right: 10px;
    height: 100%;
    width: 220px;
  }
  .descriptor {
    flex: 1;
    height: 100%;
  }
}
</style>
