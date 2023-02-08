<template>
  <svg aria-hidden="true" :style="iconStyle">
    <use :href="symbolId" :fill="textColor" />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useChangeDark } from '@/hooks/useChangeDark'

const { textColor } = useChangeDark()

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  iconStyle: {
    type: String,
    default: 'width: 20px; height: 20px;'
  }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
