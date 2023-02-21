import { defineStore } from 'pinia'
import {
  reqGetInfoList,
  reqDeleteInfoList,
  reqUpdateInfoList,
  reqPutInfoList
} from '@/api/modules/list'
import { ElMessage } from 'element-plus'

interface IList {
  userList: Array<any>
}

export const useListStore = defineStore('list', {
  state: (): IList => ({
    userList: []
  }),
  actions: {
    // 获取信息
    async getInfoList(url: string, page: number = 10, offset: number = 0, formData?: any) {
      const res = await reqGetInfoList(url, page, offset, formData)
      this.userList = res.data
    },
    // 带参数获取
    async putInfoList(url: string, page: number, formData?: any) {
      const res = await reqPutInfoList(url, page, formData)
      this.userList = res.data
    },
    // 更新
    async updateInfoList(url: string, config: any) {
      const res = await reqUpdateInfoList(url, config)
      ElMessage({
        message: `更新数据成功:${JSON.stringify(config)}`,
        type: 'success'
      })
      this.userList = res.data
    },
    // 删除数据
    async deleteInfoList(url: string, id: number[]) {
      const res = await reqDeleteInfoList(url, id)
      ElMessage({
        message: `删除用户编号:${JSON.stringify(id)}`,
        type: 'success'
      })
      this.userList = res.data
    }
  },
  getters: {}
})
