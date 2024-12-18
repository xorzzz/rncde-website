<script setup>
// eslint-disable-next-line no-unused-vars
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import NavbarItem from './components/NavbarItem.vue'
import FooterItem from './components/FooterItem.vue'
//import ButtonNav from './components/ButtonNav.vue'

const route = useRoute()
const routesLightColor = ['/services', '/why-us', '/how-do-we-do', '/contact', '/legal/terms']

//observamos si hay algun cambio en la ruta para alertar al footer que cambie de color
const isServicesPath = computed(() => route.path === '/why-runcode')
const activateLightText = computed(() => routesLightColor.includes(route.path))
</script>

<template>
  <!--
HEADER AND FOOTER, DE AQUI SE ENVIAN LLAMAN LOS COMPONENTES DESDE ROUTER
  -->
  <div class="main-xdz">
    <NavbarItem :startColor="activateLightText ? 'light' : 'dark'" class="na"></NavbarItem>
    <div id="marco" style="width: 100%">
      <RouterView class="ad" v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
    <FooterItem :backgroundColor="isServicesPath ? 'blue' : 'white'" />
    <!--
    
    <ButtonNav class="floating-button"></ButtonNav>
    -->
  </div>
</template>
<style scoped>
.main-xdz {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  .na {
    position: fixed;
    z-index: 2;
    top: 0;
    transition: all 0.4s ease;
    width: 100%;
  }

  .ad {
    position: relative;
    z-index: 1;
    /*
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  */
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease-out;
  }

  .floating-button {
    position: fixed; /* El botón se mantiene en la misma posición al hacer scroll */
    bottom: 20px; /* Distancia desde la parte inferior de la ventana */
    right: 20px; /* Distancia desde el lado derecho de la ventana */
    z-index: 1000; /* Asegurar que el botón esté por encima de otros elementos */
  }

  .floating-button :focus {
    outline-color: transparent;
    outline-style: none;
  }

  .floating-button:active {
    background-color: #28a745; /* Mantener el color original al hacer clic */
  }
}
</style>
