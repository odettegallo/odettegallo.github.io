<template>
  <v-card class="pa-6 mb-8 elevation-6" rounded="lg">
    <h2 class="text-h5 mb-4 border-b pb-2 text-secondary">
      🛠️ Habilidades Clave en Desarrollo Front-End
    </h2>
    
    <v-list lines="two">
      <v-list-item v-for="(skillGroup, index) in skills" :key="index">
        <v-list-item-title class="text-subtitle-1 font-weight-bold mt-2 text-primary">
          {{ skillGroup.category }}
        </v-list-item-title>
        <v-list-item-subtitle class="d-flex flex-wrap">
          <v-chip v-for="(item, i) in skillGroup.items" 
                  :key="i" 
                  class="ma-1 font-weight-medium" 
                  color="secondary" 
                  variant="outlined"
                  label>
            {{ item }}
          </v-chip>
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  skills: {
    type: Array,
    required: true
  }
});
</script>