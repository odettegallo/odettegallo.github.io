<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-app-bar-title class="text-subtitle-1 text-md-h6">
      Odette Gallo - Portafolio Front-End
    </v-app-bar-title>

    <v-spacer class="d-none d-md-block"></v-spacer>

    <div class="d-none d-md-flex align-center">
      <v-btn text to="/">
        <v-icon left>mdi-account</v-icon>
        About
      </v-btn>

      <v-btn text to="/experience">
        <v-icon left>mdi-wrench-check</v-icon>
        Experience & Skills
      </v-btn>
      
      <v-btn text to="/projects">
        <v-icon left>mdi-laptop-code</v-icon>
        Projects
      </v-btn>

      <v-btn text to="/contact">
        <v-icon left>mdi-email</v-icon>
        Contact
      </v-btn>

      <v-btn 
        icon 
        :href="store.contact.github" 
        target="_blank"
        class="ml-2"
        v-if="store.contact.github && store.contact.github !== 'tu_github_url'"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </div>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list nav>
      <v-list-item to="/" prepend-icon="mdi-account" title="About" link></v-list-item>
      <v-list-item to="/experience" prepend-icon="mdi-wrench-check" title="Experience & Skills" link></v-list-item>
      <v-list-item to="/projects" prepend-icon="mdi-laptop-code" title="Projects" link></v-list-item>
      <v-list-item to="/contact" prepend-icon="mdi-email" title="Contact" link></v-list-item>
      
      <v-divider class="my-2"></v-divider>

      <v-list-item 
        v-if="store.contact.github && store.contact.github !== 'tu_github_url'"
        :href="store.contact.github" 
        target="_blank" 
        prepend-icon="mdi-github" 
        title="GitHub" 
        link
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
import { usePortfolioStore } from '../stores/usePortfolioStore'; // Ajusta la ruta si es necesario

const store = usePortfolioStore();
const drawer = ref(false); // Estado para el navigation drawer
</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>