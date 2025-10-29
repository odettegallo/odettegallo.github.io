<template>
  <v-container class="mt-8">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <h1 class="text-h3 text-center mb-6 text-primary">Experience & Skills</h1>

        <v-card class="pa-6 mb-8 elevation-6" rounded="lg">
          <h2 class="text-h5 mb-4 border-b pb-2 text-secondary">🛠️ Habilidades Clave en Desarrollo Front-End</h2>
          
          <v-list lines="two">
            <v-list-item v-for="(skillGroup, index) in store.technicalSkills" :key="index">
              <v-list-item-title class="text-subtitle-1 font-weight-bold mt-2">{{ skillGroup.category }}</v-list-item-title>
              <v-list-item-subtitle class="d-flex flex-wrap">
                <v-chip v-for="(item, i) in skillGroup.items" :key="i" class="ma-1" color="blue-grey-lighten-4" label>
                  {{ item }}
                </v-chip>
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>

        <v-card class="pa-6 elevation-6" rounded="lg">
          <h2 class="text-h5 mb-4 border-b pb-2 text-secondary">🎯 Trayectoria y Enfoque Profesional</h2>
          
          <v-timeline side="end" align="start" density="compact">
            <v-timeline-item
              dot-color="primary"
              size="small"
              icon="mdi-school"
            >
              <div class="d-flex">
                <strong class="mr-4">Formación Actual:</strong>
                <div>Bootcamp Aplicaciones Front End Trainee OTEC UNAB 2025</div>
              </div>
            </v-timeline-item>
            
            <v-timeline-item
              dot-color="secondary"
              size="small"
              icon="mdi-certificate"
            >
              <div class="d-flex">
                <strong class="mr-4">Base Formal:</strong>
                <div>Administradora Pública (Universidad de Valparaíso) y Profesional Certificada en Soporte de Tecnologías de la Información (Google).</div>
              </div>
            </v-timeline-item>
          </v-timeline>

          <h3 class="text-h6 mt-6 mb-4 text-primary">Experiencia Adicional y Certificaciones</h3>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(exp, i) in store.additionalExperience"
              :key="i"
              :title="exp.title"
              :text="exp.details.join(' • ')"
            >
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { usePortfolioStore } from '../stores/usePortfolioStore';

const store = usePortfolioStore();
</script>
