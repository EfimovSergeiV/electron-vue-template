import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import ru from './locales/ru.json'

import './style.css';
import App from './App.vue'

const pinia = createPinia()

const i18n = createI18n({
  globalInjection: true,
  locale: 'ru',
  fallbackLocale: 'en',
  messages: {
    en,
    ru
  }
})

const app = createApp(App);

app.use(pinia)
app.use(i18n)
app.mount('#app');
