<template>
  <v-container class="mt-8">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <h1 class="text-h3 text-center mb-8 text-primary">Proyectos Destacados</h1>

        <v-card class="pa-6 elevation-8" rounded="xl" v-for="project in store.projects" :key="project.name">
          <v-icon color="warning" size="x-large" class="mr-3">mdi-star</v-icon>
          <span class="text-h5 text-secondary font-weight-bold">{{ project.name }}</span>
          
          <v-divider class="my-4"></v-divider>

          <p class="text-body-1 mb-4">{{ project.description }}</p>

          <h3 class="text-subtitle-1 font-weight-bold mb-2 text-primary">Tecnologías Clave:</h3>
          <v-chip-group>
            <v-chip 
              v-for="tech in project.technologies" 
              :key="tech" 
              color="primary" 
              variant="flat" 
              class="font-weight-medium"
            >
              {{ tech }}
            </v-chip>
          </v-chip-group>

          <v-divider class="my-6"></v-divider>

          <v-row>
            <v-col cols="12" md="6">
              <v-btn 
                :href="project.demoUrl" 
                target="_blank" 
                color="success" 
                size="large" 
                block 
                prepend-icon="mdi-link"
              >
                Enlace Funcional (Demo)
              </v-btn>
            </v-col>
            <v-col cols="12" md="6">
              <v-btn 
                :href="project.repoUrl" 
                target="_blank" 
                color="grey-darken-3" 
                size="large" 
                block 
                prepend-icon="mdi-github"
                class="mt-md-0 mt-2"
              >
                Documentación / Código
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { usePortfolioStore } from '../stores/usePortfolioStore';

const store = usePortfolioStore();
</script>
