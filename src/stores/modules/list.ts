import { defineStore } from 'pinia'
import { reqGetInfoList, reqDeleteInfoList, reqUpdateInfoList } from '@/api/modules/list'

interface IList {
  userList: Array<any>
}

export const useListStore = defineStore('list', {
  state: (): IList => ({
    userList: []
  }),
  actions: {
    async getInfoList(url: string, page: number = 10, offset: number = 0) {
      const res = await reqGetInfoList(url, page, offset)
      this.userList = res.data
    },
    async updateInfoList(url: string, config: any) {
      const res = await reqUpdateInfoList(url, config)
      this.userList = res.data
    },
    async deleteInfoList(url: string, id: number[]) {
      const res = await reqDeleteInfoList(url, id)
      this.userList = res.data
    }
  },
  getters: {}
})
