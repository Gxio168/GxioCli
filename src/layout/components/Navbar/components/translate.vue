<template>
  <div class="translate">
    <el-dropdown trigger="click" @command="handleClick">
      <svg-icon-vue name="fanyi" style="outline: none" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="zh" :disabled="isChinese">简体中文</el-dropdown-item>
          <el-dropdown-item command="en" :disabled="!isChinese">English</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useGlobalSystem } from '@/hooks/useGlobalSystem'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
const { toggleLanguage, isChinese } = useGlobalSystem()
// 切换中英文
const handleClick = (command: string) => {
  i18n.locale.value = command
  command === 'zh' ? toggleLanguage(true) : toggleLanguage(false)
}
</script>
<style scoped lang="scss">
.translate {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;
}
</style>
