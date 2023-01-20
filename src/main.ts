import router from './router'
import { createApp } from 'vue'

import { registerIcon } from '@/global'
import { registerStore } from './stores'
import { registerComponent } from './components'

import App from './App.vue'
import '@/global/register_element_style'
import '@/style/index.scss'
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(router)

registerIcon(app)
registerStore(app)
registerComponent(app)


app.mount('#app')
