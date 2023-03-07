<script setup lang="ts" name="UploadImg">
const config = [
  { label: 'id', text: '唯一标识一个上传列表(必传)' },
  { label: 'drag', text: '是否可以拖拽上传，default: false' },
  { label: 'disabled', text: '是否可以进行修改 default: false' },
  { label: 'type', text: '上传图片类型  "avatar| picture" default: avator' },
  { label: 'isRadius', text: '边框形状 default: true' },
  { label: 'limitSize', text: '限制图片的大小 default: 4 * 1024 * 1024' },
  { label: 'limitNums', text: '限制上传的数量 default: 1' },
  {
    label: 'uploadStyle',
    text: "输入框的样式 default:  () => ({ width: '140px', height: '140px' })"
  }
]

const uploadRef = ref()
const upload = () => {
  uploadRef.value.handleUpload()
}
</script>
<template>
  <Page-content-vue>
    <template #title> 多图片上传 🍓🍇🍐🍉 </template>
    <template #content>
      <el-button @click="upload">Click</el-button>
      <div class="upload">
        <div class="item">
          <span class="title">单文件上传</span>
          <upload-img-vue
            ref="uploadRef"
            id="upload3"
            type="avatar"
            url="/api/upload"
            image-url="https://i.imgtg.com/2023/01/16/QR57a.jpg"
          />
        </div>
        <div class="item">
          <span class="title">多文件上传</span>
          <upload-img-vue
            id="upload4"
            type="picture"
            url="/api/upload"
            :limitNums="5"
            :isRadius="false"
            :drag="true"
            :image-url="[]"
          />
        </div>
        <div class="item">
          <span class="title">禁止上传</span>
          <upload-img-vue
            id="upload4"
            type="avatar"
            url="/api/upload"
            disabled
            :limitNums="2"
            image-url="https://i.imgtg.com/2023/01/16/QR57a.jpg"
          />
        </div>
      </div>
      <div class="descriptor">
        <descriptions-vue title="配置项 📚（其它参数和单图上传组件相同）" :config="config" />
      </div>
    </template>
  </Page-content-vue>
</template>

<style scoped lang="scss">
@import url(./index.scss);
</style>
