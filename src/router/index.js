// src/router/index.js (Debería verse similar a esto, solo añade la ruta del proyecto)
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue' // Importa la nueva vista

const router = createRouter({
  // Importante: createWebHistory(import.meta.env.BASE_URL) es estándar en Vite
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/proyecto-destacado', // Nueva ruta para el proyecto
      name: 'project',
      component: ProjectView
    }
  ]
})

export default router