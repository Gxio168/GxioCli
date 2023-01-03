import router from './router'
import { createApp } from 'vue'

import { registerIcon } from '@/global'
import { registerStore } from './stores'

import '@/style/index.scss'
import App from './App.vue'

const app = createApp(App)

registerIcon(app)
registerStore(app)

app.use(router)

app.mount('#app')
