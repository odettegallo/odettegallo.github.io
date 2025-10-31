<template>
  <v-container class="mt-8">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        
        <h2 class="text-h4 text-center mb-6 text-secondary font-weight-medium">
          Detalle del Proyecto
        </h2>

        <ProjectCard 
          :project="featuredProject"
        />

        <div class="text-center mt-8">
          <v-btn 
            color="secondary" 
            size="large"
            to="/projects" 
            prepend-icon="mdi-arrow-left-circle"
          >
            Volver a la Lista de Proyectos
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { usePortfolioStore } from '../stores/usePortfolioStore';
import ProjectCard from '../components/ProjectCard.vue'; // <-- Reutilizamos el componente

const store = usePortfolioStore();

// Obtener el proyecto destacado (usamos el primero del array, ya que es el único definido en el store)
import { useRoute } from 'vue-router';

const route = useRoute();
const projectId = route.params.id;
const selectedProject = computed(() => store.getProjectById(projectId));
const featuredProject = computed(() => {
  return selectedProject.value || {
    name: 'Proyecto No Encontrado',
    description: 'El proyecto solicitado no existe.',
    technologies: [],
    demoUrl: '#',
    repoUrl: '#',
  };
});
</script>