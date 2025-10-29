<template>
  <v-footer app padless color="primary"> 
    <v-row justify="center" no-gutters class="d-flex flex-column align-center">
      
      <v-col class="py-2" cols="12">
        <div class="d-flex justify-center">
          
          <v-btn
            v-if="store.contact.linkedin && store.contact.linkedin !== 'tu_linkedin_url'"
            :href="store.contact.linkedin"
            target="_blank"
            icon
            variant="plain"
            class="mx-2 text-white"
            aria-label="Enlace a LinkedIn"
          >
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          
          <v-btn
            v-if="store.contact.github && store.contact.github !== 'tu_github_url'"
            :href="store.contact.github"
            target="_blank"
            icon
            variant="plain"
            class="mx-2 text-white"
            aria-label="Enlace a GitHub"
          >
            <v-icon>mdi-github</v-icon>
          </v-btn>

          <v-btn
            v-if="store.contact.email && store.contact.email !== 'tu_correo@example.com'"
            :href="`mailto:${store.contact.email}`"
            icon
            variant="plain"
            class="mx-2 text-white"
            aria-label="Enviar correo electrónico"
          >
            <v-icon>mdi-email</v-icon>
          </v-btn>
          
        </div>
      </v-col>
      
      <v-col class="text-center py-3 text-white" cols="12">
        &copy; {{ new Date().getFullYear() }} — 
        <strong>Odette Gallo Martínez | Bootcamp OTEC UNAB 2025</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
import { usePortfolioStore } from '../stores/usePortfolioStore';

// ⭐️ Importar el store para acceder a los enlaces
const store = usePortfolioStore();
</script>

<style scoped>
/* Estilos específicos del footer si fueran necesarios */
</style>