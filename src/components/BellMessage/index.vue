<template>
  <div class="bell-message">
    <el-dropdown trigger="click">
      <svg-icon-vue name="xiaoxi" />
      <template #dropdown>
        <div class="tabs">
          <el-tabs v-model="activeName" class="list-tabs" @tab-click="handleClick">
            <el-tab-pane label="通知" name="first">通知</el-tab-pane>
            <el-tab-pane label="信息" name="second">信息</el-tab-pane>
            <el-tab-pane label="代办" name="third">代办</el-tab-pane>
          </el-tabs>
        </div>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style scoped lang="scss">
.bell-message {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;
}
.tabs {
  padding: 10px;
  .list-tabs {
    width: 300px;
  }
}
</style>
