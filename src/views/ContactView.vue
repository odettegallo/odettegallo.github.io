<template>
  <v-container class="mt-8">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <h1 class="text-h3 text-center mb-6 text-primary font-weight-bold">
          <v-icon size="x-large" class="mr-2">mdi-email-outline</v-icon>
          Contacto</h1>

        <v-card class="pa-6 pa-md-10 elevation-12" rounded="xl">
          <v-row>
            <ContactForm />
            
            <ContactInfo />
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import ContactForm from '../components/ContactComponents/ContactForm.vue';
import ContactInfo from '../components/ContactComponents/ContactInfo.vue';
// Ya no necesitamos importar usePortfolioStore aquí, lo hicimos en ContactInfo.vue
</script>

<style scoped>
.text-primary {
  color: #1B3A5A !important; /* Usamos el primary del tema */
}
</style>