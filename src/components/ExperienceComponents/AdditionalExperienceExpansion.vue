<template>
  <div>
    <h3 class="text-h6 mt-6 mb-4 text-primary">Experiencia Adicional y Certificaciones</h3>
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(exp, i) in experienceData"
        :key="i"
      >
        <v-expansion-panel-title class="font-weight-bold">
            {{ exp.title }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
            <div class="pa-2">
                <ul>
                    <li v-for="(detail, j) in exp.details" :key="j" class="mb-1 text-medium-emphasis">
                        {{ detail }}
                    </li>
                </ul>
                <div v-if="exp.diplomadosUrls || exp.coursesUrls" class="mt-3">
                    <span class="font-weight-bold">Enlaces de Verificación:</span>
                    <div class="d-flex flex-wrap mt-1">
                        <v-btn 
                            v-for="(url, k) in [...(exp.diplomadosUrls || []), ...(exp.coursesUrls || [])]" 
                            :key="k" 
                            :href="url" 
                            target="_blank" 
                            variant="text"
                            color="primary"
                            size="small"
                            class="text-caption pa-0 ma-1 text-decoration-underline"
                            rel="noopener noreferrer"
                        >
                            Ver Documento {{ k + 1 }}
                            <v-icon right small>mdi-open-in-new</v-icon>
                        </v-btn>
                    </div>
                </div>
            </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  experienceData: {
    type: Array,
    required: true
  }
});
</script>