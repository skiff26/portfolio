import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import uk from './locales/uk.json'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: { en, uk }
})

export default i18n
