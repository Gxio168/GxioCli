import type { App } from 'vue'
import { defineAsyncComponent } from 'vue'

export async function registerComponent(app: App<Element>) {
  const components = import.meta.glob('./modules/*/index.vue')
  for (let componentName in components) {
    const fn = components[componentName]
    componentName = componentName.split('/')[2] + 'Vue'
    app.component(
      componentName,
      defineAsyncComponent(() => {
        return fn() as any
      })
    )
  }
}
