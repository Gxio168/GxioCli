import { createI18n } from 'vue-i18n'
import zh from './modules/zh'
import en from './modules/en'

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  globalInjection: true, // 全局注冊 $t() 方法
  messages: {
    zh,
    en
  }
})

export default i18n