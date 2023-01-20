import { createPinia } from 'pinia'
import type { App } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useAuthStore } from './auth'

export const registerStore = (app: App<Element>) => {
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)
  app.use(pinia)
  const authStore = useAuthStore()
  authStore.loadingBeforeRender()
}
