<template>
  <v-row justify="center">
    <v-col cols="12" md="10" lg="8">
      <v-card class="pa-6 elevation-8" rounded="xl">
        <v-row align="center">
          <v-col cols="12" sm="4" class="text-center">
            <v-avatar size="180" color="primary">
              <v-img :src="imageSrc" :alt="name"></v-img>
            </v-avatar>
            <h1 class="text-h4 mt-4 mb-2 text-primary">{{ name }}</h1>
            <h2 class="text-h6 text-secondary">{{ title }}</h2>
          </v-col>

          <v-col cols="12" sm="8">
            <v-chip size="large" color="success" class="mb-4">{{ tagline }}</v-chip>

            <p class="text-body-1 mb-6 text-justify">
              {{ summary }}
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
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
});
</script>