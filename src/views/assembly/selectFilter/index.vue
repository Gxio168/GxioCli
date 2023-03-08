<script setup lang="ts" name="SelectFilter">
const filterResult = ref({ state: '1', type: ['1', '3'] })
const filterData = [
  {
    title: '物流状态(单)',
    key: 'state',
    options: [
      {
        label: '全部',
        value: ''
      },
      {
        label: '已下单',
        value: '1',
        icon: 'ShoppingCart'
      },
      {
        label: '已发货',
        value: '2',
        icon: 'Van'
      },
      {
        label: '已签收',
        value: '3',
        icon: 'Edit'
      },
      {
        label: '已退回',
        value: '4',
        icon: 'Guide'
      },
      {
        label: '已完成',
        value: '5',
        icon: 'CircleCheck'
      }
    ]
  },
  {
    title: '商品类型(多)',
    key: 'type',
    multiple: true,
    options: [
      {
        label: '全部',
        value: ''
      },
      {
        label: '食品类',
        value: '1'
      },
      {
        label: '服装类',
        value: '2'
      },
      {
        label: '家具类',
        value: '3'
      },
      {
        label: '日用品类',
        value: '4'
      }
    ]
  }
]

const config = [
  {
    label: 'data',
    text: '需要筛选的数据列表，详情请查看代码'
  },
  {
    label: 'defaultValues',
    text: '默认选中的值'
  }
]

// 控制 filterResult 的结果
const handleChangeFilter = (selected: any) => {
  filterResult.value = selected
}
</script>
<template>
  <page-content-vue>
    <template #title>
      <span>分类筛选器 🍓🍇🍈🍉</span>
    </template>
      <!-- 过滤组件 -->
      <select-filter
        :default-values="filterResult"
        :data="filterData"
        @change="handleChangeFilter"
      />
      <div style="text-align: center; font-weight: bold">返回值: {{ filterResult }}</div>
      <Descriptions title="配置项 📚" :config="config" />
  </page-content-vue>
</template>

<style scoped lang="scss"></style>
