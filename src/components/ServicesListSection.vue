// src/components/ServicesListSection.vue
<template>
  <v-row justify="center" class="my-10">
    <v-col cols="12" md="10" lg="8">
      <v-card class="pa-6 elevation-2" rounded="xl" color="background">
        
        <div class="text-center mb-6">
          <v-chip color="primary" label class="text-uppercase font-weight-bold">
            <v-icon start icon="mdi-cogs"></v-icon>
            Servicios Principales
          </v-chip>
        </div>

        <v-expansion-panels variant="accordion" class="elevation-0">
          <v-expansion-panel
            v-for="(service, index) in services"
            :key="index"
            :title="service.title"
            :color="index % 2 === 0 ? 'primary' : 'secondary'"
            :class="index % 2 === 0 ? 'text-white' : 'text-primary'"
            rounded="lg"
            class="mb-3"
          >
            <template v-slot:text>
              <v-list-item 
                class="pa-0"
                :color="index % 2 === 0 ? 'white' : 'primary'"
                :subtitle="service.description"
              >
                <template v-slot:prepend>
                    <v-icon 
                      :color="index % 2 === 0 ? 'white' : 'primary'"
                      :icon="service.icon"
                      class="mr-4"
                    ></v-icon>
                </template>
              </v-list-item>
            </template>
          </v-expansion-panel>
        </v-expansion-panels>

      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
const services = [
  { 
    title: 'Desarrollo de Aplicaciones Web Front-End', 
    icon: 'mdi-code-braces', 
    description: 'Creación de aplicaciones con HTML, CSS y JavaScript, implementando funcionalidades de usuario final.' 
  },
  { 
    title: 'Diseño e Implementación de Interfaces de Usuario Web (UI)', 
    icon: 'mdi-palette', 
    description: 'Interfaces web visuales e interactivas utilizando buenas prácticas y frameworks como Bootstrap y Vue.js.' 
  },
  { 
    title: 'Programación JavaScript Avanzada', 
    icon: 'mdi-language-javascript', 
    description: 'Codificación de soluciones con POO, orientación a eventos y programación asíncrona.' 
  },
  { 
    title: 'Consumo y Procesamiento de APIs', 
    icon: 'mdi-api', 
    description: 'Conexión y manejo de datos de APIs externas utilizando XHR y la API Fetch.' 
  },
  { 
    title: 'Control de Versiones con Git y GitHub', 
    icon: 'mdi-git', 
    description: 'Gestión segura y colaborativa del código fuente de proyectos.' 
  },
  { 
    title: 'Desarrollo Responsivo (Responsive Design)', 
    icon: 'mdi-monitor-cellphone', 
    description: 'Creación de sitios web que se adaptan automáticamente a cualquier dispositivo y tamaño de pantalla.' 
  },
  { 
    title: 'Uso de Frameworks CSS (Bootstrap)', 
    icon: 'mdi-bootstrap', 
    description: 'Implementación de layouts y estilos complejos utilizando frameworks CSS como Bootstrap.' 
  },
  { 
    title: 'Desarrollo con Vue.js (Frameworks de Componentes)', 
    icon: 'mdi-vuejs', 
    description: 'Creación de interfaces interactivas con Vue.js, Vue Router y gestión de estado.' 
  },
  { 
    title: 'Construcción y Mantenimiento de Portafolios Digitales', 
    icon: 'mdi-folder-open', 
    description: 'Elaboración y presentación de productos tecnológicos en un portafolio personal (GitHub, hosting, videos).' 
  },
];
</script>