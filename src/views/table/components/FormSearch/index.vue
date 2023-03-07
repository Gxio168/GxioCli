<script setup lang="ts">
import { getStaticData } from '@/utils/getStaticDate'
import { showLineNum, getblankCol } from './helper'
import { useWindowWidth } from '@/hooks/useWindowWidth'

import type { FormHeader } from '@/types'

const { pageWidth, cancelHandleWindow } = useWindowWidth()

// 页面卸载移除 window 的 resize 事件
onBeforeUnmount(() => {
  cancelHandleWindow()
})

// 一行显示选项的个数
const span = ref(8)

// 监视 一行显示个数的变化
watch(
  () => pageWidth.value,
  newVal => {
    if (newVal > 1900) {
      span.value = 6
    } else if (newVal > 1000) {
      span.value = 8
    } else {
      span.value = 12
    }
  },
  { immediate: true }
)
const props = defineProps<{
  config: FormHeader
}>()

const emit = defineEmits(['handleSearch', 'handleReset'])

// 判断一下当前的搜索项是否 大于2, 不大于2 则没有折叠的必要
const configLen = props.config.length
const formInline = ref(props.config)

const staticData = getStaticData(props.config)

const formData = ref(staticData)

// 判断当前是否进行折叠
const isCollapes = ref(true)
// 能否折叠
const canCollapes = configLen > 2

// 获取进行折叠后的 formInline 数组
const handleCollapesFrom = () => {
  isCollapes.value = !isCollapes.value
}

// 表单搜索
const search = () => {
  emit('handleSearch', toRaw(formData.value))
}

// 表单重置
const reset = () => {
  formData.value = getStaticData(props.config)
  emit('handleReset')
}
</script>

<template>
  <el-card style="min-height: 80px">
    <el-form :model="formData" class="demo-form-inline">
      <el-row :gutter="20">
        <template v-for="(item, index) in formInline">
          <el-col :span="span" v-show="!isCollapes || index < showLineNum(span)">
            <el-form-item :label="item.label">
              <!-- input 输入框 -->
              <template v-if="item.type === 'input'">
                <el-input
                  style="width: 100%"
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder || `请选择${item.label}`"
                />
              </template>
              <!-- select 下拉框 -->
              <template v-else-if="item.type === 'select'">
                <el-select
                  style="width: 100%"
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder || `请选择${item.label}`"
                >
                  <el-option
                    v-for="selectItem in item.children"
                    :label="selectItem.label"
                    :value="selectItem.value"
                  />
                </el-select>
              </template>
              <!-- date 时间选择 -->
              <template v-else-if="item.type === 'date'">
                <el-date-picker
                  v-model="formData[item.prop]"
                  type="datetimerange"
                  range-separator="-"
                  :start-placeholder="item.startPlaceHolder"
                  :end-placeholder="item.endPlaceHolder"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>

        <!-- 按钮选择部分 -->
        <template v-if="!isCollapes">
          <el-col :span="span" v-for="item in getblankCol(span, configLen)"></el-col>
        </template>
        <el-col :span="span">
          <div style="text-align: right">
            <el-button icon="search" type="primary" @click="search">搜索</el-button>
            <el-button icon="delete" @click="reset">重置</el-button>
            <template v-if="canCollapes">
              <el-button type="primary" link @click="handleCollapesFrom">
                {{ isCollapes ? '展开' : '合并' }}
                <el-icon
                  ><component
                    style="margin-left: 2px"
                    :is="isCollapes ? 'ArrowDown' : 'ArrowUp'"
                  ></component
                ></el-icon>
              </el-button>
            </template>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>
<style scoped lang="scss"></style>
