<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-title>
        Odette Gallo - Portafolio Front-End
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <!-- Botones de navegación principal -->
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

      <!-- Icono de GitHub (Usando el dato del store) -->
      <v-btn 
        icon 
        :href="store.contact.github" 
        target="_blank"
        class="ml-2"
        v-if="store.contact.github && store.contact.github !== 'tu_github_url'"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>

    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>

    <v-footer app padless color="grey-darken-3">
      <v-row justify="center" no-gutters>
        <v-col class="text-center py-3 text-white" cols="12">
          &copy; {{ new Date().getFullYear() }} — 
          <strong>Odette Gallo Martínez | Bootcamp OTEC UNAB 2025</strong>
        </v-col>
      </v-row>
    </v-footer>

  </v-app>
</template>

<script setup>
import { usePortfolioStore } from './stores/usePortafolioStore';

const store = usePortfolioStore();
</script>

<style>
/* Estilos CSS para la transición */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
