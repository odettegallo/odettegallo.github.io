<template>
  <v-col cols="12" md="6">
    <h2 class="text-h5 mb-4 text-primary">Conversemos 👋</h2>
    <p class="mb-6 text-medium-emphasis">
      Estoy disponible para nuevas oportunidades y colaboraciones. ¡Envíame un mensaje directo!
    </p>
    
    <v-form @submit.prevent="submitForm">
      <v-text-field 
        v-model="formData.name"
        label="Nombre" 
        variant="outlined" 
        prepend-inner-icon="mdi-account"
        required
        :rules="[v => !!v || 'El nombre es obligatorio']"
        class="mb-4"
      ></v-text-field>
      
      <v-text-field 
        v-model="formData.email"
        label="Email" 
        variant="outlined" 
        prepend-inner-icon="mdi-email"
        type="email"
        required
        :rules="[v => !!v || 'El email es obligatorio', v => /.+@.+\..+/.test(v) || 'El email debe ser válido']"
        class="mb-4"
      ></v-text-field>

      <v-textarea
        v-model="formData.message"
        label="Tu Mensaje"
        variant="outlined"
        rows="5"
        prepend-inner-icon="mdi-comment-text"
        required
        :rules="[v => !!v || 'El mensaje es obligatorio']"
        class="mb-6"
      ></v-textarea>

      <v-btn 
        color="primary" 
        size="large" 
        type="submit" 
        :loading="loading"
        block
        append-icon="mdi-send"
      >
        Enviar Mensaje
      </v-btn>
    </v-form>
    
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="3000">
      {{ snackbar.text }}
    </v-snackbar>
  </v-col>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser'; // Asegúrate de instalar emailjs si lo usas

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const loading = ref(false);
const snackbar = ref({
  show: false,
  text: '',
  color: ''
});

// Implementación de la funcionalidad de envío (se detalla en la sección 2)
const submitForm = async () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    snackbar.value = {
      show: true,
      text: 'Por favor completa todos los campos.',
      color: 'error'
    };
    return;
  }
  
  loading.value = true;
  // **AQUÍ VA LA LLAMADA AL SERVIDOR/SERVICIO DE EMAIL**
  
  try {
    const serviceID = 'porta_service_8xlj3jl';
    const templateID = 'template_e2ci7o6';
    const publicKey = 'YzHZQfslTp3kfGvcw';
    await emailjs.send(serviceID, templateID, {
        from_name: formData.value.name,
        from_email: formData.value.email,
        message: formData.value.message
    }, publicKey);
    
    snackbar.value = {
      show: true,
      text: '¡Mensaje enviado con éxito!',
      color: 'success'
    };
    
    // Limpiar formulario
    formData.value = { name: '', email: '', message: '' };
    
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    snackbar.value = {
      show: true,
      text: 'Hubo un error al enviar el mensaje. Intenta de nuevo.',
      color: 'error'
    };
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
/* Estilos para sobriedad: usar la paleta de colores del main.js */
.text-primary {
  color: var(--v-theme-primary) !important;
}
.text-medium-emphasis {
  color: rgba(0, 0, 0, 0.6); /* Color sobrio para el texto */
}
</style>