import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

// 将 app 中的配置项全部解构返回
export function useGlobalSystem() {
  const appStore = useAppStore()
  const { sidebar, navbar, labelbar } = storeToRefs(appStore)
  return {
    sidebar,
    navbar,
    labelbar,
    addToLabelbar: appStore.addToLabelbar,
    removeFromLabelbar: appStore.removeFromLabelbar,
    clearLabelbar: appStore.clearLabelbar,
    closeOthersLabelbar: appStore.closeOthersLabelbar,
    toggleSidebar: appStore.toggleSidebar,
    toggleFullScreen: appStore.toggleFullScreen
  }
}