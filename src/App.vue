<template>
  <v-app>
    <NavBar />

    <v-main class="bg-background"> 
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>

    <v-footer app padless color="primary"> 
      <v-row justify="center" no-gutters>
        <v-col class="text-center py-3 text-white" cols="12">
          &copy; {{ new Date().getFullYear() }} — 
          <strong>Odette Gallo Martínez | Bootcamp OTEC UNAB 2025</strong>
        </v-col>
      </v-row>
    </v-footer>

  </v-app>
</template>

<script setup>
import NavBar from './components/NavBar.vue'; 

</script>

<style>
/* Estilos CSS para la transición */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>