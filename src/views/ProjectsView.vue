<template>
  <v-container class="mt-8">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <h1 class="text-h3 text-center mb-10 text-primary font-weight-bold">
          <v-icon size="x-large" class="mr-2">mdi-folder-multiple-outline</v-icon>
          Proyectos Destacados
        </h1>

        <ProjectCard 
          v-for="project in store.projects" 
          :key="project.name"
          :project="project"
        />

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { usePortfolioStore } from '../stores/usePortfolioStore';
import ProjectCard from '../components/ProjectCard.vue'; // <-- Importar el nuevo componente

const store = usePortfolioStore();
</script>