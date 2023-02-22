<script setup lang="ts">
import { ZoomIn, Delete, Edit } from '@element-plus/icons-vue'
import type { UploadUserFile } from 'element-plus'
import type { Ref } from 'vue'

interface IProps {
  drag?: boolean // ==> 是否可以拖拽
  disable?: boolean // ===> 是否可以进行修改
  type?: 'avatar' | 'picture' // ===> 上传图片类型   avator | picture
  isBorder?: boolean
  limitSize?: number
  limitNums?: number
}
const props = withDefaults(defineProps<IProps>(), {
  drag: false,
  disable: false,
  isBorder: true,
  type: 'avatar',
  limitSize: 4 * 1024 * 1024,
  limitNums: 5
})

const fileList: Ref<UploadUserFile[]> = ref([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
  }
])

const tipStr = computed(() => (props.type === 'avatar' ? '请上传头像' : '请上传图片'))
const tipIcon = computed(() => (props.type === 'avatar' ? 'Avatar' : 'Picture'))
const border = computed(() => (props.type === 'avatar' ? '50%' : '8px'))

/**
 * @description 文件上传前的校验，比如文件大下，类型等
 */
const handleBeforeUpload = () => {}
</script>
<template>
  <Page-content-vue :bodyStyle="{ height: '500px' }">
    <template #title> 多图片上传 </template>
    <template #content>
      <span style="display: inline-block; text-align: center">
        <el-upload
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          list-type="picture-card"
          :drag="drag"
          v-model:file-list="fileList"
          :before-upload="handleBeforeUpload"
          accept="image/jpg,image/png,image/jpeg,image/gif"
        >
          <template #default>
            <div class="content">
              <el-icon><component :is="tipIcon"></component></el-icon>
              <span>{{ tipStr }}</span>
            </div>
          </template>
          <template #file>
            <img
              src="https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
            />
            <!-- 遮罩和选项按钮 -->
            <div class="mask">
              <div v-if="!disable">
                <el-icon><Edit /></el-icon>
                <span>编辑</span>
              </div>
              <div>
                <el-icon><ZoomIn /></el-icon>
                <span>查看</span>
              </div>
              <div v-if="!disable">
                <el-icon><Delete /></el-icon>
                <span>删除</span>
              </div>
            </div>
          </template>
        </el-upload>
        <slot name="tip"> <div class="tip-text">这里是提示框</div> </slot>
      </span>
    </template>
  </Page-content-vue>
</template>

<style scoped lang="scss">
@import url(./index.scss);
:deep(.el-icon svg) {
  width: 20px;
  height: 20px;
}

:deep(.el-upload-list__item) {
  border-radius: v-bind(border);
}

:deep(.el-upload--picture-card) {
  border-radius: v-bind(border);
}

.mask {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
  cursor: pointer;
  z-index: 999;
  color: white;
  &:hover {
    opacity: 1;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
      margin-top: 5px;
    }
  }
}
</style>
