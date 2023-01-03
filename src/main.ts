import router from './router'
import { createApp } from 'vue'

import { registerIcon } from '@/global'
import { registerStore } from './stores'

import App from './App.vue'
import '@/style/index.scss'
import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)

registerIcon(app)
registerStore(app)

app.use(router)

app.mount('#app')
