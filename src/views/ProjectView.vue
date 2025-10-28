<template>
  <v-container>
    <v-card class="pa-5" elevation="5">
      <h2 class="text-h4 mb-4">Proyecto Destacado: Aplicación Web con Firebase</h2>
      <p class="text-body-1 mb-4">
        Este proyecto demuestra la implementación completa de una aplicación Front-End, 
        incluyendo autenticación de usuarios y despliegue en un entorno real.
      </p>

      <v-list lines="one">
        <v-list-item 
          prepend-icon="mdi-link" 
          title="Enlace Funcional (Demo)" 
          :href="'https://cursos-adweb-online.web.app/login'" 
          target="_blank"
        ></v-list-item>
        <v-list-item 
          prepend-icon="mdi-code-braces" 
          title="Código Fuente / Documentación" 
          href="[Tu Enlace al Repositorio del Proyecto]" 
          target="_blank"
        ></v-list-item>
        <v-list-item 
          prepend-icon="mdi-tools" 
          title="Tecnologías Usadas"
          subtitle="Vue 3, Vue Router, Firebase Hosting & Auth."
        ></v-list-item>
      </v-list>

      <v-btn class="mt-4" color="secondary" to="/">
        ← Volver a la Presentación
      </v-btn>
    </v-card>
  </v-container>
</template>