<template>
  <v-container class="mt-8">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card class="pa-6 elevation-8" rounded="xl">
          <v-row align="center">
            <v-col cols="12" sm="4" class="text-center">
              <v-avatar size="180" color="primary">
                <!-- Reemplaza /path/to/your/photo.jpg con la ruta real de tu imagen en la carpeta public o assets -->
                <v-img src="./src/assets/img/foto_perfil.jpg" alt="Odette Gallo Martínez"></v-img>
              </v-avatar>
              <h1 class="text-h4 mt-4 mb-2 text-primary">{{ store.name }}</h1>
              <h2 class="text-h6 text-secondary">{{ store.title }}</h2>
            </v-col>
            
            <v-col cols="12" sm="8">
              <v-chip size="large" color="success" class="mb-4">{{ store.tagline }}</v-chip>
              
              <p class="text-body-1 mb-6 text-justify">
                {{ store.summary }}
              </p>

              <v-btn 
                color="secondary" 
                size="large" 
                to="/experience" 
                append-icon="mdi-arrow-right"
              >
                Ver Habilidades Clave
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- Services Section (Usando un card simple) -->
    <v-row justify="center" class="mt-8">
      <v-col cols="12" md="10" lg="8">
        <v-card class="pa-6 elevation-4" rounded="lg">
          <h3 class="text-h5 text-center mb-4 text-primary">Servicios / Enfoque Profesional</h3>
          <v-row justify="center">
            <v-col cols="12" sm="6" md="4" v-for="i in 3" :key="i">
              <v-card class="pa-4 text-center" variant="outlined" :title="['Visión Integral', 'Orientación al Logro', 'Mejora Continua'][i-1]">
                <v-icon color="primary" size="x-large" class="my-2">{{ ['mdi-sitemap', 'mdi-trophy', 'mdi-recycle-variant'][i-1] }}</v-icon>
                <p class="text-caption">
                  {{ ['Abordar proyectos con organización y eficiencia.', 'Fuerte impulso y enfoque en resultados.', 'Aprendizaje constante y actualización de conocimientos.'][i-1] }}
                </p>
              </v-card>
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
