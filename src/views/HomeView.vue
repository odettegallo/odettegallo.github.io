<template>
  <v-container class="mt-8">
    <HeroSection 
      :name="store.name"
      :title="store.title"
      :tagline="store.tagline"
      :summary="store.summary"
      imageSrc="./src/assets/img/foto_perfil.jpg"
    />

    <ServicesSection />
    
  </v-container>
</template>

<script setup>
import { usePortfolioStore } from '../stores/usePortfolioStore';
import HeroSection from '../components/HeroSection.vue'; // Asume que lo guardarás en /components
import ServicesSection from '../components/ServicesSection.vue'; // Asume que lo guardarás en /components

const store = usePortfolioStore();
</script>