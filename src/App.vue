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


    <FooterP />
  </v-app>
</template>

<script setup>
import NavBar from '@/components/LayoutComponents/NavBar.vue';
import FooterP from '@/components/LayoutComponents/FooterP.vue';
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