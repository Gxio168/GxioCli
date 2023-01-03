import { createPinia } from 'pinia'
import type { App } from 'vue'

export const registerStore = (app: App<Element>) => {
  const pinia = createPinia()
  app.use(pinia)
}
