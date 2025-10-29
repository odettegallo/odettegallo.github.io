<template>
  <v-row justify="center" class="mt-8">
    <v-col cols="12" md="10" lg="8">
      <v-card class="pa-6 elevation-4" rounded="lg">
        <h3 class="text-h5 text-center mb-4 text-primary">Servicios / Enfoque Profesional</h3>
        <v-row justify="center">
          <v-col cols="12" sm="6" md="4" v-for="service in services" :key="service.title">
            <v-card 
              class="pa-4 text-center" 
              variant="outlined" 
              :title="service.title"
            >
              <v-icon color="primary" size="x-large" class="my-2">{{ service.icon }}</v-icon>
              <p class="text-caption">
                {{ service.description }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
// Podrías pasar esto como una prop, pero lo dejamos local por simplicidad inicial.
const services = [
  { title: 'Visión Integral', icon: 'mdi-sitemap', description: 'Abordar proyectos con organización y eficiencia.' },
  { title: 'Orientación al Logro', icon: 'mdi-trophy', description: 'Fuerte impulso y enfoque en resultados.' },
  { title: 'Mejora Continua', icon: 'mdi-recycle-variant', description: 'Aprendizaje constante y actualización de conocimientos.' },
];
</script>