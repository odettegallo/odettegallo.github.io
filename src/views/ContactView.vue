<template>
  <v-container class="mt-8">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <h1 class="text-h3 text-center mb-6 text-primary">Contacto</h1>

        <v-card class="pa-6 elevation-8" rounded="xl">
          <v-row>
            <v-col cols="12" md="6">
              <h2 class="text-h5 mb-4 text-secondary">Conversemos</h2>
              <p class="mb-4">Estoy disponible para nuevas oportunidades y colaboraciones. ¡Envíame un mensaje directo!</p>
              
              <v-text-field 
                label="Nombre" 
                variant="outlined" 
                prepend-inner-icon="mdi-account"
                hide-details
                class="mb-3"
              ></v-text-field>
              
              <v-text-field 
                label="Email" 
                variant="outlined" 
                prepend-inner-icon="mdi-email"
                type="email"
                hide-details
                class="mb-3"
              ></v-text-field>

              <v-textarea
                label="Tu Mensaje"
                variant="outlined"
                rows="4"
                prepend-inner-icon="mdi-comment-text"
                hide-details
                class="mb-4"
              ></v-textarea>

              <v-btn color="primary" size="large" append-icon="mdi-send">
                Enviar Mensaje (Funcionalidad de Envío por Email pendiente)
              </v-btn>
            </v-col>
            
            <v-col cols="12" md="6">
              <v-divider class="my-4 d-md-none"></v-divider>
              <h2 class="text-h5 mb-4 text-secondary">Información y Redes</h2>
              
              <v-list density="compact">
                <v-list-item :title="store.contact.email" prepend-icon="mdi-email-outline">
                  <v-list-item-subtitle>Email</v-list-item-subtitle>
                </v-list-item>
                
                <v-list-item :href="store.contact.linkedin" target="_blank" prepend-icon="mdi-linkedin" link>
                  <v-list-item-title>LinkedIn</v-list-item-title>
                  <v-list-item-subtitle>{{ store.contact.linkedin }}</v-list-item-subtitle>
                </v-list-item>
                
                <v-list-item :href="store.contact.github" target="_blank" prepend-icon="mdi-github" link>
                  <v-list-item-title>GitHub</v-list-item-title>
                  <v-list-item-subtitle>{{ store.contact.github }}</v-list-item-subtitle>
                </v-list-item>
              </v-list>
              <v-alert
                type="info"
                variant="tonal"
                class="mt-4"
                title="Actualiza tus Enlaces"
                text="Recuerda reemplazar 'tu.email@ejemplo.com', 'tu_linkedin_url', y 'tu_github_url' en el store Pinia con tus datos reales."
              ></v-alert>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { usePortfolioStore } from '@/stores/usePortfolioStore';

const store = usePortfolioStore();
</script>
