<template>
  <v-card 
    class="pa-6 mb-8 elevation-6" 
    rounded="lg"
    border="md"
    color="white"
  >
    <div class="d-flex align-center mb-4">
      <v-icon color="primary" size="x-large" class="mr-3">mdi-star-four-points</v-icon>
      <span class="text-h5 text-primary font-weight-bold">{{ project.name }}</span>
    </div>
    
    <v-divider class="my-4"></v-divider>

    <p class="text-body-1 mb-4 text-grey-darken-3">{{ project.description }}</p>

    <h3 class="text-subtitle-1 font-weight-bold mb-3 text-secondary">Tecnologías Clave:</h3>
    <v-chip-group>
      <v-chip 
        v-for="tech in project.technologies" 
        :key="tech" 
        color="secondary" 
        variant="flat" 
        class="font-weight-medium"
      >
        {{ tech }}
      </v-chip>
    </v-chip-group>

    <v-divider class="my-6"></v-divider>

    <v-row>
      <v-col cols="12" sm="6" class="py-1">
        <v-btn 
          :href="project.demoUrl" 
          target="_blank" 
          color="primary" 
          variant="flat"
          size="large" 
          block 
          prepend-icon="mdi-monitor-clean"
        >
          Ver Demo Funcional
        </v-btn>
      </v-col>
      <v-col cols="12" sm="6" class="py-1">
        <v-btn 
          :href="project.repoUrl" 
          target="_blank" 
          color="grey-darken-3" 
          variant="outlined"
          size="large" 
          block 
          prepend-icon="mdi-github"
        >
          Código Fuente (Repo)
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  project: {
    type: Object,
    required: true,
    default: () => ({
      name: 'Proyecto de Ejemplo',
      description: 'Descripción no disponible',
      technologies: [],
      demoUrl: '#',
      repoUrl: '#',
    }),
  },
});
</script>