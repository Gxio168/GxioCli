import router from './router'
import { createApp } from 'vue'

import errorHandler from './utils/errorHandler'
import i18n from '@/language'
import { registerIcon } from '@/global/register_icon'
import { registerStore } from './stores'
import { registerComponent } from './components'

import App from './App.vue'
import '@/global/register_element_style'
import '@/style/index.scss'
import 'virtual:svg-icons-register'

const app = createApp(App)
app.config.errorHandler = errorHandler
app.use(router).use(i18n)

registerIcon(app)
registerStore(app)
registerComponent(app)

app.mount('#app')
