<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-avatar size="150">
          <v-img src="/path/to/your/photo.jpg" alt="Odette Gallo Martínez"></v-img>
        </v-avatar>
        <h1 class="text-h3 mt-4 mb-2">Odette Gallo Martínez</h1>
        <h2 class="text-h5 mb-4 text-primary">Front-End Trainee & Profesional TI</h2>

        <v-card class="pa-4 mb-6" elevation="3">
          <p class="text-body-1">
            Profesional con más de **4 años de experiencia en Gestión Administrativa** y **2 años en Soporte TI**, 
            actualmente cursando el **Bootcamp Aplicaciones Front End Trainee OTEC UNAB 2025**. 
            Mi enfoque es la mejora continua, aplicando una visión integral en proyectos tecnológicos.
          </p>
        </v-card>

        <v-card class="pa-4 mb-6" title="Habilidades Clave Front-End">
          <v-chip-group>
            <v-chip color="success">Vue.js</v-chip>
            <v-chip color="info">Pinia</v-chip>
            <v-chip color="info">Vue Router</v-chip>
            <v-chip color="info">Vuetify</v-chip>
            <v-chip color="warning">HTML5 / CSS / JS</v-chip>
            <v-chip>Responsivo</v-chip>
          </v-chip-group>
        </v-card>

        <v-btn color="primary" size="large" to="/proyecto-destacado" class="mt-4">
          Ver Proyecto Destacado 🚀
        </v-btn>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  // Lógica de Vue si fuera necesaria
</script>