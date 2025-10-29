import { defineStore } from 'pinia';

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    // --- Datos Principales ---
    name: 'Odette Gallo Martínez',
    title: 'Front-End Trainee & Profesional TI',
    tagline: 'Bootcamp Aplicaciones Front End Trainee OTEC UNAB 2025',
    summary: '¡Hola! Soy Odette Gallo Martínez, y actualmente estoy cursando el Bootcamp de Aplicaciones Front End Trainee OTEC UNAB 2025, transformando mi sólida base administrativa y de TI en desarrollo Front-End. Poseo una base formal como Administradora Pública de la Universidad de Valparaíso y soy Profesional Certificada en Soporte de Tecnologías de la Información de Google. Cuento con más de 4 años de experiencia en Gestión Administrativa y 2 años en Soporte TI, lo que me permite abordar los proyectos con una visión integral, priorizando la organización, la eficiencia y la experiencia del usuario.',
    
    // --- Habilidades Técnicas ---
    technicalSkills: [
      { category: 'Vue Ecosystem', items: ['Vue.js (Composition API)', 'Pinia (manejo de estado)', 'Vue-Router (navegación)', 'Vuetify (componentes UI)', 'Integración con Firebase'] },
      { category: 'Conexión y Datos', items: ['Axios para consumo de APIs', 'Configuración de Rutas / Nuxt'] },
      { category: 'Fundamentos Web', items: ['HTML5', 'CSS', 'JavaScript (JS)', 'Diseño responsivo', 'Buenas Prácticas de desarrollo'] },
    ],
    
    // --- Experiencia Adicional y Certificaciones ---
    additionalExperience: [
      {
        title: 'Diplomados', 
        details: ['Marketing Digital y Gestión Estratégica', 'Comunicación en la Era Digital', 'Emprendimiento Social y Marketing Personal', 'Diseño y Programación Web']
      },
      {
        title: 'Cursos Destacados (Más de 100)', 
        details: ['IA Generativa (Microsoft y LinkedIn)', 'Análisis de Datos y Fundamentos de Ciberseguridad', 'Gestión del Tiempo y Gestión de Proyectos', 'Habilidades Profesionales Blandas y Liderazgo', 'Microsoft 365 Avanzado (Excel, Word, etc.)']
      },
    ],
    
    // --- Proyectos ---
    projects: [
      {
        name: 'Aplicación Web con Firebase (Proyecto Destacado)',
        description: 'Este proyecto ejemplifica mi capacidad para realizar un deploy completo de una aplicación web, integrando servicios back-end (autenticación y hosting).',
        technologies: ['Vue', 'Vue-Router', 'Firebase Hosting/Auth'],
        demoUrl: 'https://cursos-adweb-online.web.app/login',
        repoUrl: '[Incluir el enlace al repositorio de GitHub para la documentación del proyecto.]',
      },
    ],

    // --- Contacto/Social ---
    contact: {
      email: 'tu.email@ejemplo.com', // Reemplazar con tu email real
      linkedin: 'tu_linkedin_url',   // Reemplazar
      github: 'tu_github_url',       // Reemplazar
    }
  }),
  
  getters: {
    // Getter simple para obtener el resumen principal
    getSummary: (state) => state.summary,
  },
});
