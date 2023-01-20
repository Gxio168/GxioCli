<template>
  <svg aria-hidden="true" :style="iconStyle">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#ccc'
  },
  iconStyle: {
    type: String,
    default: 'width: 20px; height: 20px'
  }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
