<template>
  <div>
    <h2 class="text-h5 mb-4 border-b pb-2 text-secondary">
      🎯 Trayectoria y Enfoque Profesional
    </h2>
    
    <v-timeline side="end" align="start" density="compact">
      <v-timeline-item
        dot-color="primary"
        size="small"
        icon="mdi-school"
      >
        <div class="d-flex">
          <strong class="mr-4 text-primary">Formación Actual:</strong>
          <div>Bootcamp Aplicaciones Front End Trainee OTEC UNAB 2025</div>
        </div>
      </v-timeline-item>
      
      <v-timeline-item
        dot-color="secondary"
        size="small"
        icon="mdi-certificate"
      >
        <div class="d-flex">
          <strong class="mr-4 text-primary">Base Formal:</strong>
          <div>Administradora Pública (Universidad de Valparaíso) y Profesional Certificada en Soporte de Tecnologías de la Información (Google).</div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup>
// No necesita props ni lógica adicional por ahora.
</script>