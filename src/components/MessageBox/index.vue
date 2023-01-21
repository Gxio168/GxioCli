<template>
  <div class="card">
    <transition name="fade">
      <div @click="close()" class="mask" v-if="isVisible"></div>
    </transition>
    <transition name="up">
      <div class="content" v-if="isVisible">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
type Props = {
  isVisible: boolean
}

defineProps<Props>()

const emit = defineEmits(['update:isVisibel'])

const close = () => {
  emit('update:isVisibel', false)
}
</script>
<style scoped lang="scss">
.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 99;
}

.content {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.up-enter-active,
.up-leave-active {
  transition: all 0.5s;
}

.up-enter-from {
  opacity: 0;
  transform: translate(-50%, -100px);
}

.up-leave-to {
  opacity: 0;
  transform: translate(-50%, -100px);
}
</style>
