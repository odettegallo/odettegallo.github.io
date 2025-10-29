// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia()

// Importar Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Importar iconos Material Design

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#1B3A5A', // Azul Marino Oscuro (profesionalidad)
          secondary: '#A7BCCB', // Azul Grisáceo Claro (acentos sutiles)
          accent: '#A7BCCB', // Usamos secondary como acento
          background: '#f5f5f5', // Gris muy claro para el fondo
        },
      },
    },
  },
})

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(vuetify) // Usar Vuetify

app.mount('#app')