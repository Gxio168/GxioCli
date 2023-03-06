<script setup lang="ts">
import { ZoomIn, Delete, Edit, Avatar, Picture } from '@element-plus/icons-vue'
import type { UploadUserFile, UploadFile, UploadFiles } from 'element-plus'
import { ElNotification } from 'element-plus'
import { stringToArray } from '@/utils/transformType'
import type { Ref, CSSProperties } from 'vue'

interface IProps {
  id: string // ===> 标识 input 输入框的唯一性
  drag?: boolean // ==> 是否可以拖拽
  disabled?: boolean // ===> 是否可以进行修改
  type?: 'avatar' | 'picture' // ===> 上传图片类型   avator | picture
  isRadius?: boolean // ===> 边框形状
  limitSize?: number // ===>  限制图片的大小
  limitNums?: number // ===> 限制上传的数量
  uploadStyle?: CSSProperties
  url?: string //  ===> 上传地址
  imageUrl: string | Array<string> //  默认图片地址
  modelValue: string //  ===>  双向绑定 value
}
const props = withDefaults(defineProps<IProps>(), {
  drag: false,
  disabled: false,
  isRadius: true,
  type: 'avatar',
  limitSize: 4 * 1024 * 1024,
  limitNums: 1,
  uploadStyle: () => ({ width: '140px', height: '140px' })
})

// 转换图片资源为图片数组
const transformUrl = (imageUrl: string | Array<string>) => {
  if (imageUrl === '') return []
  if (typeof imageUrl === 'string') {
    return stringToArray(imageUrl).map(item => ({
      name: `text_${Date.now()}`,
      url: item
    }))
  } else {
    return imageUrl.map(item => ({
      name: `text_${Date.now()}`,
      url: item
    }))
  }
}

// 双向绑定的传递参数
const emit = defineEmits(['update:modelValue'])
console.log(props)
// 图片资源列表
const fileList: Ref<UploadUserFile[]> = ref(transformUrl(props.imageUrl))

// 实现图片数据的双向绑定
watch(
  () => fileList.value,
  newVal => {
    emit('update:modelValue', newVal)
  },
  {
    deep: true
  }
)

// 样式配置
const tipStr = props.type === 'avatar' ? '请上传头像' : '请上传图片'
const border = props.isRadius ? '50%' : '8px'
const urlList = ref([]) as any
const canUpload = computed(() => (fileList.value.length === props.limitNums ? 'none' : 'flex'))
const disabledStyle = props.disabled
  ? {
      cursor: 'no-drop',
      borderColor: 'var(--el-border-color-darker)'
    }
  : {
      cursor: 'pointer',
      borderColor: 'var(--el-color-primary);'
    }

const uploadRef = ref()

//文件上传前的校验，比如文件大下，类型等
const handleBeforeUpload = () => {}

// 上传图片前的校验
const handleImgNumberChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  if (uploadFiles.length > props.limitNums) {
    uploadFiles.shift()
  }
  // 添加图片
  if ((uploadFile.size as any) > props.limitSize) {
    ElNotification({
      type: 'error',
      title: '温馨提示',
      message: '图片过大!'
    })
    handleDeleteImg(uploadFile)
  } else {
    ElNotification({
      type: 'success',
      title: '温馨提示',
      message: '图片上传成功!'
    })
  }
}

// 控制图片资源的替换操作
const handleEditImg = () => {
  const dom = document.querySelector(`#${props.id} .el-upload__input`) as HTMLInputElement
  dom.dispatchEvent(new MouseEvent('click'))
}

const dialogVisible = ref(false)
const imageView = () => {
  dialogVisible.value = !dialogVisible.value
}
//  控制图片资源的预览
const handlePreviewImg = (file: any) => {
  urlList.value = [file.url]
  imageView()
}

// 控制图片资源的删除
const handleDeleteImg = (file: any) => {
  const idx = fileList.value.findIndex(item => item.uid === file.uid)
  fileList.value.splice(idx, 1)
}

// 上传事件
const handleUpload = () => {
  uploadRef.value.submit()
}

// 导出提交函数
// 交由用户决定怎么提交
defineExpose({
  handleUpload
})
</script>
<template>
  <span style="display: inline-block; text-align: center" :id="id">
    <el-upload
      ref="uploadRef"
      accept="image/jpg,image/png,image/jpeg,image/gif"
      :action="url"
      list-type="picture-card"
      :auto-upload="false"
      :drag="drag"
      v-model:file-list="fileList"
      :before-upload="handleBeforeUpload"
      :on-change="handleImgNumberChange"
      :disabled="disabled"
    >
      <template #default>
        <div class="content">
          <el-icon>
            <Avatar v-if="type === 'avatar'" />
            <Picture v-else />
          </el-icon>
          <span>{{ tipStr }}</span>
        </div>
      </template>
      <template #file="{ file }">
        <img :src="file.url" />
        <!-- 遮罩和选项按钮 -->
        <div class="mask">
          <div v-if="!disabled && limitNums === 1" @click="handleEditImg">
            <el-icon><Edit /></el-icon>
            <span>编辑</span>
          </div>
          <div @click="handlePreviewImg(file)">
            <el-icon><ZoomIn /></el-icon>
            <span>查看</span>
          </div>
          <div v-if="!disabled" @click="handleDeleteImg(file)">
            <el-icon><Delete /></el-icon>
            <span>删除</span>
          </div>
        </div>
      </template>
    </el-upload>
    <slot name="tip"> <div class="tip-text">这里是提示框</div> </slot>
    <!-- 显示大图片 -->
    <el-image-viewer v-if="dialogVisible" @close="imageView" :url-list="urlList" />
  </span>
</template>

<style scoped lang="scss">
@import url(./index.scss);
:deep(.el-icon svg) {
  width: 20px;
  height: 20px;
}

:deep(.el-upload-list__item) {
  border-radius: v-bind(border);
  width: v-bind('uploadStyle.width');
  height: v-bind('uploadStyle.height');
  &:hover {
    display: flex !important;
  }
}
:global(.is-error .el-upload--picture-card) {
  box-shadow: 0 0 0 1px var(--el-color-danger) inset;
}
:deep(.el-upload--picture-card) {
  border-radius: v-bind(border);
  display: v-bind(canUpload);
  width: v-bind('uploadStyle.width');
  height: v-bind('uploadStyle.height');
  cursor: v-bind('disabledStyle.cursor');
  transition: all 0.5s;
  &:hover {
    border-color: v-bind('disabledStyle.borderColor');
  }
  &:focus {
    border-color: v-bind('disabledStyle.borderColor');
  }
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
      letter-spacing: 3px;
    }
  }
}
</style>
