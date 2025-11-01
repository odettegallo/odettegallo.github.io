import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExperienceView from '../views/ExperienceView.vue' // Nueva vista
import ProjectsView from '../views/ProjectsView.vue'     // Nueva vista
import ContactView from '../views/ContactView.vue'       // Nueva vista

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  scrollBehavior(to, from, savedPosition) {
      return { top: 0 }
    },

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView
    },
    {
      path: '/projects', // Reemplaza /proyecto-destacado por /projects para ser más genérico
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    // Puedes añadir una ruta de 404 aquí si lo necesitas
    
  ]
})

export default router
