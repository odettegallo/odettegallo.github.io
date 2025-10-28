<template>
  <v-app>
    
    <v-app-bar app color="primary" dark>
      <v-app-bar-title>
        Odette Gallo - Portafolio Front-End
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn text to="/">
        <v-icon left>mdi-home</v-icon>
        Inicio
      </v-btn>

      <v-btn text to="/proyecto-destacado">
        <v-icon left>mdi-laptop-code</v-icon>
        Proyecto Destacado
      </v-btn>

      <v-btn icon href="https://github.com/tu-usuario/tu-repositorio-portfolio" target="_blank">
        <v-icon>mdi-github</v-icon>
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>

    <v-footer app padless color="grey-lighten-4">
      <v-row justify="center" no-gutters>
        <v-col class="text-center py-2" cols="12">
          &copy; {{ new Date().getFullYear() }} — 
          <strong>Odette Gallo Martínez | Bootcamp OTEC UNAB 2025</strong>
        </v-col>
      </v-row>
    </v-footer>

  </v-app>
</template>

<script setup>
  // En este componente raíz, usualmente no hay mucha lógica, 
  // ya que solo define el layout.
  // La lógica de las vistas se maneja en HomeView y ProjectView.
</script>

<style>
/* Estilos CSS para la transición (si decides usarla) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>