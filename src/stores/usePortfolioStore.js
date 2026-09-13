import { defineStore } from 'pinia';

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    // --- Datos Principales ---
    name: 'Odette Gallo Martínez',
    title: 'Full Stack Java & Front-End Developer',
    tagline: 'Desarrolladora Full Stack Java & Profesional TI',
    summary: '¡Hola! Soy Odette Gallo Martínez. Tras consolidar mi base en el desarrollo Front-End (Vue.js) y mi experiencia en TI, he expandido mis competencias técnicas completando el bootcamp de Desarrollo de Aplicaciones Full Stack Java. Poseo una base formal como Administradora Pública de la Universidad de Valparaíso y soy Profesional Certificada en Soporte de Tecnologías de la Información de Google. Mi enfoque combina la visión analítica y de procesos con un sólido dominio técnico para construir aplicaciones web eficientes de extremo a extremo.',
    
    // --- Habilidades Técnicas ---
    technicalSkills: [
      { category: 'Ecosistema Java & Backend', items: ['Java (POO, Colecciones, Excepciones)', 'Spring Boot (APIs REST)', 'Bases de Datos Relacionales (SQL / MySQL / PostgreSQL)', 'JPA / Hibernate'] },
      { category: 'Vue & Front-End Ecosystem', items: ['Vue.js (Composition API)', 'Pinia (manejo de estado)', 'Vue-Router (navegación)', 'Vuetify y Bootstrap (UI)', 'Integración con Firebase'] },
      { category: 'Herramientas y Conectividad', items: ['Axios para consumo de APIs', 'Git & GitHub', 'Postman', 'Despliegue y Control de Versiones'] },
    ],
    
    // --- Experiencia Adicional y Certificaciones ---
    additionalExperience: [
      {
        title: 'CV Profesional', 
        details: ['Administradora Pública - Universidad de Valparaíso', 'Profesional Certificada en Soporte de Tecnologías de la Información - Google', 'Desarrolladora Full Stack Java Trainee', 'Más de 4 años en Gestión Administrativa y 2 años en Soporte TI'],
        cvUrl: [
          'https://docs.google.com/document/d/12A-tuzPs4FhmecF0gmFERo8LVv3mm6Q0/edit?usp=sharing&ouid=101854029669132058599&rtpof=true&sd=true',
        ],
      },
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
          'https://drive.google.com/file/d/10Xc_IkLR_4bSYe7aw8O5K_nwgTOjCBjH/view?usp=sharing',
          'https://drive.google.com/file/d/1wJt7if6DrToGMkqtAZTJSLW5vG6K6DDl/view?usp=sharing',
          'https://drive.google.com/file/d/1WviRsGUJrb9aKrfi4dFW_SMo9jBLyzju/view?usp=drive_link'
        ],
      },
    ],
    
    // --- Proyectos ---
    projects: [
      {
        id: 1,
        name: 'Sistema de Gestión de Biblioteca (Java Web & Servlets)',
        description: 'Aplicación web monolítica desarrollada en Java (Servlets y JSP) para la gestión integral de préstamos de libros, usuarios y catálogo bibliográfico. Implementa persistencia con H2 Database y MySQL, conectividad JDBC y ejecución sobre Apache Tomcat.',
        technologies: ['Java 21', 'Servlets', 'JSP', 'Apache Tomcat', 'MySQL', 'H2 Database', 'Eclipse / STS'],
        //demoUrl: 'https://github.com/odettegallo',
        repoUrl: 'https://github.com/odettegallo/ProyectoBiblioteca',
      },
      {
        id: 2,
        name: 'SpringEduManager (Java & Spring Boot)',
        description: 'Proyecto integrador backend desarrollado con Spring Boot y persistencia de datos relacional, implementando arquitectura limpia y buenas prácticas para servicios web.',
        technologies: ['Java', 'Spring Boot', 'SQL', 'Maven', 'Git'],
        //demoUrl: 'https://github.com/odettegallo',
        repoUrl: 'https://github.com/odettegallo/SpringEduManager',
      },
      {
        id: 3,
        name: 'Crypto Portal - Aplicación Web con Firebase',
        description: 'Aplicación web interactiva que ejemplifica el manejo de estado, rutas y despliegue integrado con servicios de autenticación y hosting cloud.',
        technologies: ['Vue', 'Vue-Router', 'Firebase Hosting/Auth'],
        demoUrl: 'https://cripto-vue.web.app/login',
        repoUrl: 'https://github.com/odettegallo/cripto-vue.git',
      },
      {
        id: 4,
        name: 'ADWEB Online - Plataforma de Cursos',
        description: 'Aplicación web colaborativa orientada a la gestión y visualización de recursos educativos con diseño responsivo y control de navegación.',
        technologies: ['Vue', 'Vue-Router', 'Firebase Hosting/Auth'],
        demoUrl: 'https://cursos-adweb-online.web.app/login',
        repoUrl: 'https://github.com/odettegallo/adweb-online-cursos.git',
      }
    ],

    // --- Contacto/Social ---
    contact: {
      email: 'odettegallo@outlook.es', 
      linkedin: 'https://www.linkedin.com/in/odette-gallo-mart%C3%ADnez-35913b271/',   
      github: 'https://github.com/odettegallo',
    }
  }),
  
  getters: {
    getSummary: (state) => state.summary,
  },
});