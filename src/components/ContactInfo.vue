<template>
  <v-col cols="12" md="6">
    <v-divider class="my-4 d-md-none"></v-divider>
    <h2 class="text-h5 mb-4 text-primary">Información y Redes 🌐</h2>
    <p class="mb-4 text-medium-emphasis">
      Encuéntrame en línea o contáctame directamente.
    </p>
    
    <v-list density="default" class="bg-transparent">
      <v-list-item class="mb-2" prepend-icon="mdi-email-outline">
        <v-list-item-title class="font-weight-medium text-subtitle-1">{{ store.contact.email }}</v-list-item-title>
        <v-list-item-subtitle>Email</v-list-item-subtitle>
      </v-list-item>
      
      <v-list-item class="mb-2" :href="store.contact.linkedin" target="_blank" prepend-icon="mdi-linkedin" link>
        <v-list-item-title class="font-weight-medium text-subtitle-1">LinkedIn</v-list-item-title>
        <v-list-item-subtitle>{{ store.contact.linkedin }}</v-list-item-subtitle>
      </v-list-item>
      
      <v-list-item class="mb-2" :href="store.contact.github" target="_blank" prepend-icon="mdi-github" link>
        <v-list-item-title class="font-weight-medium text-subtitle-1">GitHub</v-list-item-title>
        <v-list-item-subtitle>{{ store.contact.github }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
    
    <v-alert
      type="info"
      variant="tonal"
      class="mt-6 pa-3"
      density="compact"
      title="Actualiza tus Enlaces"
      text="Recuerda reemplazar los valores por defecto en tu store Pinia."
    ></v-alert>
  </v-col>
</template>

<script setup>
import { usePortfolioStore } from '../stores/usePortfolioStore';

const store = usePortfolioStore();
</script>

<style scoped>
.text-primary {
  color: var(--v-theme-primary) !important;
}
.text-medium-emphasis {
  color: rgba(0, 0, 0, 0.6);
}
.bg-transparent {
  background-color: transparent !important;
}
</style>