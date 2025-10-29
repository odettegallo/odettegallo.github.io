import { defineStore } from 'pinia';

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    // --- Datos Principales ---
    name: 'Odette Gallo Martínez',
    title: 'Front-End Trainee & Profesional TI',
    tagline: 'Trainee en Desarrollo Front-End',
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
        details: ['Marketing Digital y Gestión Estratégica', 'Comunicación en la Era Digital', 'Emprendimiento Social y Marketing Personal', 'Diseño y Programación Web'],
        diplomadosUrls: [
          'https://drive.google.com/file/d/1npz6bx-Bc-wO_o2ai1NJKyXCvo5D8L4k/view?usp=drive_link',
        
        ],
      },
      {
        title: 'Cursos Destacados (Más de 100)', 
        details: ['IA Generativa (Microsoft y LinkedIn)', 'Análisis de Datos y Fundamentos de Ciberseguridad', 'Gestión del Tiempo y Gestión de Proyectos', 'Habilidades Profesionales Blandas y Liderazgo', 'Microsoft 365 Avanzado (Excel, Word, etc.)'],
        coursesUrls: [
          'https://drive.google.com/file/d/1xaW5Z5zYLm60MGNwgfn-fZq6VRhyF14g/view?usp=drive_link',
          'https://drive.google.com/file/d/1WviRsGUJrb9aKrfi4dFW_SMo9jBLyzju/view?usp=drive_link'
        ],
      },
    ],
    
    // --- Proyectos ---
    projects: [
      {
        name: 'Aplicación Web con Firebase (Proyecto Destacado)',
        description: 'Este proyecto ejemplifica mi capacidad para realizar un deploy completo de una aplicación web, integrando servicios back-end (autenticación y hosting).',
        technologies: ['Vue', 'Vue-Router', 'Firebase Hosting/Auth'],
        demoUrl: 'https://cursos-adweb-online.web.app/login',
        repoUrl: 'https://github.com/odettegallo/adweb-online-cursos.git',
      },
    ],

    // --- Contacto/Social ---
    contact: {
      email: 'odettegallo@outlook.es', 
      linkedin: 'https://www.linkedin.com/in/odette-gallo-mart%C3%ADnez-35913b271/',   
      github: 'https://github.com/odettegallo',
    }
  }),
  
  getters: {
    // Getter simple para obtener el resumen principal
    getSummary: (state) => state.summary,
  },
});
