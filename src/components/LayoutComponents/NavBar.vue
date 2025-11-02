<template>
  <v-app-bar app color="primary" :elevation="4">
    <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-app-bar-title class="text-subtitle-1 text-md-h6 text-white">
      <router-link to="/" class="text-white text-decoration-none">
      <v-icon left class="mr-2">mdi-folder-account</v-icon>
      Odette Gallo - Portafolio Front-End
      </router-link>
    </v-app-bar-title>

    <v-spacer class="d-none d-md-block"></v-spacer>

    <div class="d-none d-md-flex align-center">
      <v-btn text to="/" class="text-white">
        About
      </v-btn>

      <v-btn text to="/experience" class="text-white">
        Experience & Skills
      </v-btn>
      
      <v-btn text to="/projects" class="text-white">
        Projects
      </v-btn>

      <v-btn text to="/contact" class="text-white">
        Contact
      </v-btn>

      <v-btn 
        icon 
        :href="store.contact.github" 
        target="_blank"
        class="ml-2"
        v-if="store.contact.github && store.contact.github !== 'tu_github_url'"
      >
        <v-icon color="white">mdi-github</v-icon>
      </v-btn>
    </div>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list nav>
      <v-list-item to="/" prepend-icon="mdi-account" title="About" link></v-list-item>
      <v-list-item to="/experience" prepend-icon="mdi-wrench-check" title="Experience & Skills" link></v-list-item>
      <v-list-item to="/projects" prepend-icon="mdi-laptop" title="Projects" link></v-list-item>
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
import { usePortfolioStore } from '../../stores/usePortfolioStore'; 

const store = usePortfolioStore();
const drawer = ref(false); // Estado para el navigation drawer
</script>

<style scoped>
</style>