import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'

const i18n = createI18n({
  globalInjection: true,
  locale: (localStorage.getItem('language') || 'pt-BR'),
  //fallbackLocale: ['pt-BR', 'en-US'],
  messages
})

export default boot(({ app }) => {
  // Set i18n instance on app
  localStorage.setItem('language', 'pt-BR')
  app.use(i18n)
})
