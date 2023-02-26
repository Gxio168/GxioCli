import router from './router'
import { createApp } from 'vue'

import errorHandler from './utils/errorHandler'
import i18n from '@/language'

// 注册
import { registerIcon } from '@/utils/register'
import { registerStore } from './stores'
import { registerComponent } from './components'
import { registerDirectives } from './directives'

import App from './App.vue'
import '@/style/index.scss'
import 'virtual:svg-icons-register'

const app = createApp(App)
app.config.errorHandler = errorHandler
app.use(router).use(i18n)

registerIcon(app)
registerStore(app)
registerComponent(app)
registerDirectives(app)

app.mount('#app')
