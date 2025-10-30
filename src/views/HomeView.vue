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
    <ServicesListSection />
    
  </v-container>
</template>

<script setup>
import { usePortfolioStore } from '../stores/usePortfolioStore';
import HeroSection from '../components/HeroSection.vue'; // Asume que lo guardarás en /components
import ServicesSection from '../components/ProfessionalFocusSection.vue'; // Asume que lo guardarás en /components
import ServicesListSection from '../components/ServicesListSection.vue';

const store = usePortfolioStore();
</script>