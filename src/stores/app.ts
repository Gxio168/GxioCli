import { defineStore } from "pinia";
import { docCookies } from '@/utils/cookie'

export const useAppStore = defineStore('app', {
  state: () => ({
    sidebar: {
      opened: docCookies.getItem('sidebarStatus') ? !!+(docCookies.getItem('sidebarStatus') as any) : true,
      withoutAnimation: false
    }
  }), 
  actions: {
    // 修改 sidebar 的状态
    toggleSidebar() {
      this.sidebar.opened = !this.sidebar.opened
      this.sidebar.withoutAnimation = false
      // 如果是打开的
      if (this.sidebar.opened) { // 如果当前的 sidebar 是打开的，则设置为 1
        docCookies.setItem('sidebarStatus', 1)
      } else {    // 否则设置为 0
        docCookies.setItem('sidebarStatus', 0)
      }
    },
    // 关闭 sidebar
    closeSidebar(withoutAnimation: boolean) {
      docCookies.setItem('sidebarStatus', 0)
      this.sidebar.opened = false
      this.sidebar.withoutAnimation = withoutAnimation
    }
  },
  getters: {

  }
})