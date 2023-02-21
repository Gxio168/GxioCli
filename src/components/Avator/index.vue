<template>
  <div class="upload-box" :id="id">
    <el-upload
      class="avatar-uploader"
      v-model:file-list="fileList"
      action="/api/upload"
      list-type="picture-card"
      accept="image/jpeg,image/jpeg,image/png"
      :disabled="disabled"
      :limit="limitNums"
      :on-change="handleChange"
      :on-exceed="handleExceed"
      :on-success="handleSuccess"
    >
      <!-- 文字显示 -->
      <div class="el-upload__text">
        <el-icon class="el-icon--upload"><avatar /></el-icon>{{ message }}
      </div>

      <template #file>
        <!-- 自定义编辑按钮 -->
        <img v-if="fileList.length" class="upload-image" :src="fileList[0].url" />

        <div v-if="fileList.length" class="upload-handle" @click.stop>
          <div class="handle-icon" @click="editImg" v-if="!disabled">
            <el-icon><Edit /></el-icon>
            <span>编辑</span>
          </div>
          <div class="handle-icon" @click="imageView">
            <el-icon><ZoomIn /></el-icon>
            <span>查看</span>
          </div>
          <div class="handle-icon" @click="deleteImg" v-if="!disabled">
            <el-icon><Delete /></el-icon>
            <span>删除</span>
          </div>
        </div>
      </template>
    </el-upload>
    <div class="el-upload__tip">
      <slot name="tip"> </slot>
    </div>
    <!-- 显示大图片 -->
    <el-image-viewer v-if="dialogVisible" @close="imageView" :url-list="urlList" />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { reqUpload } from '@/api/modules/upload'
import { Avatar, ZoomIn, Delete, Edit } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import type { UploadProps } from 'element-plus'

const id = `id_${Date.now()}`

interface Props {
  width?: string
  height?: string
  borderRadius?: string
  message?: string
  warn?: string
  disabled?: boolean
  limitSize?: number
  limitNums?: number
  image?: any
}
const props = withDefaults(defineProps<Props>(), {
  width: '140px',
  height: '140px',
  borderRadius: '50%',
  disabled: false,
  limitSize: 4 * 1024 * 1024,
  message: '请选择图片上传',
  limitNums: 1
})

const fileList = ref(props.image ? [props.image] : [])

const urlList = computed(() => fileList.value.map(item => item.url))

// 控制 不可选时的样式
const disabledStyle = computed(() => {
  if (props.disabled) {
    return {
      cursor: 'no-drop',
      borderColor: 'var(--el-border-color-darker)'
    }
  } else {
    return {
      cursor: 'pointer',
      borderColor: 'var(--el-primary-color)'
    }
  }
})

// 控制 限制为一张时的样式
const limitStyle = computed(() => {
  if (fileList.value.length === props.limitNums) {
    return 'none'
  } else {
    return 'flex'
  }
})

// 监视图片数量变化
const handleChange: UploadProps['onChange'] = (uploadFile, uploadFiles) => {
  fileList.value.length = 0
  fileList.value.push({ url: uploadFile.url, name: uploadFile.name })
}

// 文件编辑修改内容
const handleExceed: UploadProps['onExceed'] = async (files, uploadFiles) => {
  const { name } = files[0]
  const url = URL.createObjectURL(files[0])
  fileList.value.length = 0
  fileList.value.push({ url, name })
  const res = await reqUpload('demo')
  ElMessage({
    message: res.message,
    type: 'success'
  })
}
// 图片操作
const dialogVisible = ref(false)
// 大图展示
const imageView = () => {
  dialogVisible.value = !dialogVisible.value
}
// 编辑功能
const editImg = () => {
  const dom = document.querySelector(`#${id} .el-upload__input`) as any
  dom.click()
}
// 删除图片
const deleteImg = () => {
  fileList.value.pop()
}

const handleSuccess = async (res: any) => {
  await reqUpload('demo')
  ElMessage({
    message: res.message,
    type: 'success'
  })
}
</script>
<style lang="scss" scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
:deep(.el-upload--picture-card) {
  display: v-bind(limitStyle);
  width: v-bind(width);
  height: v-bind(height);
  border-radius: v-bind(borderRadius);
  border-color: v-bind('disabledStyle.borderColor');
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &:hover {
    cursor: v-bind('disabledStyle.cursor');
    border-color: v-bind('disabledStyle.borderColor');
  }
}
:deep(.el-upload-list__item) {
  width: v-bind(width);
  height: v-bind(height);
  border-radius: v-bind(borderRadius);
}
.el-upload__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  color: #9a9da2;
}

/* 移除默认加载的图标 */
:deep(.el-upload-list__item-actions) {
  display: none !important;
}

.upload-box {
  position: relative;
  .upload-image {
    width: 100%;
    height: 100%;
  }
  .upload-handle {
    cursor: pointer;
    border-radius: v-bind(borderRadius);
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    transition: all 0.3s;
    &:hover {
      opacity: 1;
    }
    .handle-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      svg {
        width: 20px;
        height: 20px;
        color: white;
      }
    }
  }
}
/* .fitImg {
  
} */
</style>
