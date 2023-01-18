import type { App } from 'vue'
import { defineAsyncComponent } from 'vue'

export async function registerComponent(app: App<Element>) {
  const components = import.meta.glob('./*/index.vue')
  for (let componentName in components) {
    const fn = components[componentName]
    componentName = componentName.split('/')[1] + 'Vue'
    app.component(
      componentName,
      defineAsyncComponent(() => {
        return fn() as any
      })
    )
  }
}
