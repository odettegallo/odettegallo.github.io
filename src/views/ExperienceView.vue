<template>
  <v-container class="mt-8">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <h1 class="text-h3 text-center mb-6 text-primary font-weight-bold">
          Experiencia & Skills
        </h1>

        <SkillSetCard :skills="store.technicalSkills" />

        <v-card class="pa-6 elevation-6" rounded="lg">
          <ProfessionalTimeline />

          <AdditionalExperienceExpansion :experience-data="store.additionalExperience" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { usePortfolioStore } from '../stores/usePortfolioStore';
import SkillSetCard from '../components/ExperienceComponents/SkillSetCard.vue';
import ProfessionalTimeline from '../components/ExperienceComponents/ProfessionalTimeline.vue';
import AdditionalExperienceExpansion from '../components/ExperienceComponents/AdditionalExperienceExpansion.vue';

const store = usePortfolioStore();
</script>