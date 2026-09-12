// src/components/ServicesListSection.vue
<template>
  <v-row justify="center" class="my-10">
    <v-col cols="12" md="10" lg="8">
      <v-card class="pa-6 elevation-2" rounded="xl" color="background">
        
        <div class="text-center mb-6">
          <v-chip color="primary" label class="text-uppercase font-weight-bold">
            <v-icon start icon="mdi-cogs"></v-icon>
            Servicios y Competencias Principales
          </v-chip>
        </div>

        <v-expansion-panels variant="accordion" class="elevation-0">
          <v-expansion-panel
            v-for="(service, index) in services"
            :key="index"
            :title="service.title"
            :color="index % 2 === 0 ? 'primary' : 'secondary'"
            :class="index % 2 === 0 ? 'text-black' : 'text-primary'"
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
                      :color="index % 2 === 0 ? 'black' : 'primary'"
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
    title: 'Desarrollo Back-End con Java y Spring Boot', 
    icon: 'mdi-server', 
    description: 'Creación de lógica de servidor robusta, arquitectura limpia y desarrollo de APIs REST escalables utilizando Java y Spring Boot.' 
  },
  { 
    title: 'Diseño y Gestión de Bases de Datos Relacionales', 
    icon: 'mdi-database', 
    description: 'Modelado de datos, consultas SQL eficientes y persistencia mediante JPA/Hibernate para bases de datos relacionales.' 
  },
  { 
    title: 'Desarrollo de Aplicaciones Web Full Stack', 
    icon: 'mdi-layers-triple', 
    description: 'Integración completa de sistemas conectando interfaces de usuario dinámicas con servicios backend sólidos.' 
  },
  { 
    title: 'Desarrollo de Aplicaciones Web Front-End (Vue.js)', 
    icon: 'mdi-vuejs', 
    description: 'Creación de interfaces interactivas y modulares utilizando Vue.js, Vue Router y gestión de estado con Pinia.' 
  },
  { 
    title: 'Consumo y Procesamiento de APIs REST', 
    icon: 'mdi-api', 
    description: 'Conexión, comunicación asíncrona y manejo de datos entre servicios utilizando Axios y Fetch.' 
  },
  { 
    title: 'Control de Versiones y Gestión de Código (Git & GitHub)', 
    icon: 'mdi-git', 
    description: 'Gestión segura, control de cambios y trabajo colaborativo o individual del código fuente de proyectos.' 
  },
  { 
    title: 'Desarrollo Responsivo y Diseño UI (Bootstrap / Vuetify)', 
    icon: 'mdi-monitor-cellphone', 
    description: 'Creación de sitios web adaptables a cualquier dispositivo móvil o pantalla utilizando frameworks de componentes modernos.' 
  },
  { 
    title: 'Fundamentos de Soporte TI y Resolución de Problemas', 
    icon: 'mdi-lifebuoy', 
    description: 'Visión integral orientada a la solución de incidencias tecnológicas, optimización de procesos y soporte técnico especializado.' 
  },
];
</script>