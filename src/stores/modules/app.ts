import { defineStore } from 'pinia'
import router from '@/router'

import { HOME_PAGE } from '@/global'
import type { LabelItem } from '../interface'

export const useAppStore = defineStore('app', {
  state: () => ({
    sidebarOpen: true,
    fullScreen: false,
    themeColor: '#ff6700',
    isDark: false,
    isGrey: false,
    isAchromatism: false,
    hamburgerOpen: true,
    hamburgerIconOpen: true,
    labelBarOpen: true,
    labelBarIconOpen: true,
    labelbar: [HOME_PAGE] as Array<LabelItem>
  }),
  actions: {
    // 切换 sidebar 的状态
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },
    // 切换 是否全屏的状态
    toggleFullScreen() {
      this.fullScreen = !this.fullScreen
    },
    // 添加标签
    addToLabelbar(labelItem: LabelItem) {
      const index = this.labelbar.findIndex(item => item.path === labelItem.path)
      if (index === -1) {
        this.labelbar.push(labelItem)
      }
    },
    // 移除标签
    removeFromLabelbar(path: string, routePath: string) {
      const index = this.labelbar.findIndex(item => item.path === path)
      this.labelbar.splice(index, 1)
      Promise.resolve().then(() => {
        // 在当前路由删除当前路由表示的标签,进行路由跳转，如果当前标签后面有标签，则往后跳，否则往前跳
        if (routePath === path) {
          const curPath = this.labelbar[index] ? this.labelbar[index] : this.labelbar[index - 1]
          router.push(curPath)
        }
      })
    },
    // 清空标签
    clearLabelbar(path: string) {
      this.labelbar.length = 1
      // 判断一下当前是否在主页
      if (path !== HOME_PAGE.path) {
        router.push(HOME_PAGE.path)
      }
    },
    // 关闭其他标签
    closeOthersLabelbar(path: string) {
      const temp = this.labelbar.find(item => item.path === path)
      this.labelbar.length = 1
      if (path !== HOME_PAGE.path) {
        this.labelbar.push(temp!)
      }
    },
    // 改变 灰色模式
    changeIsGrey(value: boolean = false) {
      this.isGrey = value
    },
    // 改变色弱模式
    changeIsAchromatism(value: boolean = false) {
      this.isAchromatism = value
    }
  },
  getters: {},
  persist: {
    storage: localStorage
  }
})
