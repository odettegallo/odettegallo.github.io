// src/components/ProfessionalFocusSection.vue
<template>
  <v-row justify="center" class="my-10">
    <v-col cols="12" md="10" lg="8">
      <v-card class="pa-6 elevation-2" rounded="xl" color="background">
        
        <div class="text-center mb-6">
          <v-chip color="primary" label class="text-uppercase font-weight-bold">
            <v-icon start icon="mdi-account-star"></v-icon>
            Enfoque Profesional
          </v-chip>
        </div>

        <v-row justify="center">
          <v-col 
            cols="12" 
            sm="6" 
            md="4" 
            v-for="focus in professionalFocus" 
            :key="focus.title"
          >
            <v-card 
              class="pa-5 text-center transition-swing h-100" 
              hover
              flat
              border
              color="white"
              rounded="lg"
            >
              <v-icon color="primary" size="x-large" class="my-3">{{ focus.icon }}</v-icon>
              <v-card-title class="text-subtitle-1 font-weight-bold text-primary pb-1">{{ focus.title }}</v-card-title>
              <v-card-text class="text-caption text-secondary">
                {{ focus.description }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const professionalFocus = [
  { title: 'Visión Integral', icon: 'mdi-sitemap', description: 'Abordar proyectos con organización y eficiencia.' },
  { title: 'Orientación al Logro', icon: 'mdi-trophy', description: 'Fuerte impulso y enfoque en resultados.' },
  { title: 'Mejora Continua', icon: 'mdi-recycle-variant', description: 'Aprendizaje constante y actualización de conocimientos.' },
];
</script>