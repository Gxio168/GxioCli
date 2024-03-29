import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/modules/app'

// 将 app 中的配置项全部解构返回
export function useGlobalSystem() {
  const appStore = useAppStore()
  const {
    sidebarOpen,
    fullScreen,
    labelbar,
    themeColor,
    isDark,
    isGrey,
    isAchromatism,
    hamburgerOpen,
    hamburgerIconOpen,
    labelBarOpen,
    labelBarIconOpen,
    isChinese,
    footerOpen
  } = storeToRefs(appStore)

  return {
    isDark,
    isGrey,
    isAchromatism,
    hamburgerOpen,
    hamburgerIconOpen,
    labelBarOpen,
    labelBarIconOpen,
    themeColor,
    sidebarOpen,
    fullScreen,
    labelbar,
    isChinese,
    footerOpen,
    addToLabelbar: appStore.addToLabelbar,
    removeFromLabelbar: appStore.removeFromLabelbar,
    clearLabelbar: appStore.clearLabelbar,
    closeOthersLabelbar: appStore.closeOthersLabelbar,
    toggleSidebar: appStore.toggleSidebar,
    toggleFullScreen: appStore.toggleFullScreen,
    toggleLanguage: appStore.toggleLanguage,
    toggeleFooter: appStore.toggleFooter
  }
}
