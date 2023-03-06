<script setup lang="ts">
import { isArray } from '@/utils/is'
interface OptionsProp {
  value: string
  label: string
  icon?: string
}

interface DataProp {
  title: string
  key: string
  multiple?: boolean
  options: OptionsProp[]
}
interface IProps {
  data?: DataProp[]
  defaultValues: any
}
const props = withDefaults(defineProps<IProps>(), {
  data: () => []
})

const selected = ref<any>({})
onBeforeMount(() => {
  for (const key in props.defaultValues) {
    selected.value[key] = isArray(props.defaultValues[key])
      ? [...props.defaultValues[key]]
      : props.defaultValues[key]
  }
})

const handleChangeStatus = (item: OptionsProp, key: string, multiple = false) => {
  // 如果本来存在其中
  if (item.value && selected.value[key].includes(item.value)) {
    if (multiple) {
      selected.value[key] = selected.value[key].filter((i: any) => i !== item.value)
    }
  } else {
    // 不存在于原数组中
    if (multiple) {
      selected.value[key].push(item.value)
    } else {
      selected.value[key] = item.value
    }
  }
  // 包含全选的话
  if (
    (isArray(selected.value[key]) && selected.value[key].includes('')) ||
    selected.value[key] === ''
  ) {
    isArray(selected.value[key]) ? (selected.value[key] = []) : (selected.value[key] = '')
  }
  emit('change', selected)
}

type selectedProp = { [key: string]: string[] }
interface FilterEmits {
  (e: 'change', value: selectedProp): void
}
const emit = defineEmits<FilterEmits>()
</script>
<template>
  <div class="select-filter">
    <div class="select-filter__item" v-for="item in data">
      <div class="select-filter__item__title">{{ item.title }}</div>
      <div class="select-filter__item__items">
        <el-scrollbar>
          <ul>
            <li
              v-for="item2 in item.options"
              :class="{
                active:
                  (!selected[item.key].length && item2.value === '') ||
                  (item2.value && selected[item.key].includes(item2.value))
              }"
              @click="handleChangeStatus(item2, item.key, item.multiple)"
            >
              <el-icon v-if="item2.icon"><component :is="item2.icon"></component></el-icon>
              <span>{{ item2.label }}</span>
            </li>
          </ul>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
