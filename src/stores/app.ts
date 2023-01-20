import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    sidebar: {
      opened: true
    },
    navbar: {
      fullScreen: false
    }
  }),
  actions: {
    // 切换 sidebar 的状态
    toggleSidebar() {
      this.sidebar.opened = !this.sidebar.opened
    },
    // 切换 是否全屏的状态
    toggleFullScreen() {
      this.navbar.fullScreen = !this.navbar.fullScreen
    }
  },
  getters: {},
  persist: {
    storage: sessionStorage
  }
})
