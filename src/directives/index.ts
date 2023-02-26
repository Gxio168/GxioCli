import type { App } from 'vue'

export async function registerDirectives(app: App<Element>) {
  const directives = import.meta.globEager('./modules/*.ts')
  for (let name in directives) {
    const directive = directives[name] as any
    name = name.match(/\.\/modules\/(.*)\.ts/)![1]
    app.directive(name, directive.default)
  }
}
