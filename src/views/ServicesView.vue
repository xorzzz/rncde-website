<script setup>
import ButtonOutline from '@/components/ButtonOutline.vue'
import ButtonSolid from '@/components/Buttons/ButtonSolid.vue'
import ServiceCard from '@/components/Cards/ServiceCard.vue'

import serviceImg1 from '@/assets/images/services/service-1.png' // Importar la imagen directamente
import serviceImg2 from '@/assets/images/services/service-2.png' // Importar la imagen directamente
import serviceImg3 from '@/assets/images/services/service-3.png' // Importar la imagen directamente
import serviceImg4 from '@/assets/images/services/service-4.png' // Importar la imagen directamente
import serviceImg5 from '@/assets/images/services/service-5.png' // Importar la imagen directamente
import serviceImg6 from '@/assets/images/services/service-6.png' // Importar la imagen directamente

//import okicon from '@/assets/images/items/okicon.vue'
</script>

<template>
  <div class="main-services">
    <!--LAND-->
    <div class="land">
      <div class="first-section">
        <div class="title rc-title">
          CONOCE NUESTROS
          <div class="rc-title" style="color: skyblue">SERVICIOS</div>
        </div>
        <div class="separator"></div>
        <div class="img-container-mb">
          <img src="@/assets/images/services/land-img.png" alt="land-services" />
        </div>
        <div class="info-container">
          <div class="paragraph">
            Transformamos sus ideas en realidad, creando un código robusto y personalizado que se
            adapta perfectamente a sus operaciones.
          </div>
          <div class="buttons-container">
            <RouterLink to="/contact-us" class="no-deco">
              <ButtonSolid primaryColor="bg-sky">
                Explorar
                <i class="fi fi-rr-arrow-small-right"></i>
              </ButtonSolid>
            </RouterLink>
            <ButtonOutline>Contáctanos</ButtonOutline>
          </div>
        </div>
      </div>
      <div class="img-container">
        <img src="@/assets/images/services/land-img.png" alt="land-services" />
      </div>
    </div>
    <!--CARDS SERVICES-->
    <div class="services-container">
      <ServiceCard
        title="DESARROLLO WEB"
        description="Convertimos tus ideas en realidad, creando un código robusto y personalizado que se adapta
        perfectamente a sus operaciones"
        :features="[
          'Servicio adaptable a sus operaciones.',
          'Servicio adaptable a sus operaciones.'
        ]"
        :imgUrl="serviceImg1"
        primaryColor="#4CAF50"
        secondaryColor="#edf9f2"
      />
      <div class="container">
        <ServiceCard
          class=""
          title="DESARROLLO DE APLICACIONES"
          description="Convertimos tus ideas en realidad, creando un código robusto y personalizado que se adapta
        perfectamente a sus operaciones"
          :features="[
            'Servicio adaptable a sus operaciones.',
            'Servicio adaptable a sus operaciones.'
          ]"
          :imgUrl="serviceImg2"
          primaryColor="#2F80ED"
          secondaryColor="#F0F8FF"
          orientation="vertical"
        />
        <ServiceCard
          title="SERVICIOS SAP"
          description="Convertimos tus ideas en realidad, creando un código robusto y personalizado que se adapta
        perfectamente a sus operaciones"
          :features="[
            'Servicio adaptable a sus operaciones.',
            'Servicio adaptable a sus operaciones.'
          ]"
          :imgUrl="serviceImg3"
          primaryColor="#7C68FF"
          secondaryColor="#F2F0FF"
          orientation="vertical"
        />
      </div>

      <div class="container">
        <ServiceCard
          title="CONSULTORÍAS TIC"
          description="Convertimos tus ideas en realidad, creando un código robusto y personalizado que se adapta
        perfectamente a sus operaciones"
          :features="[
            'Servicio adaptable a sus operaciones.',
            'Servicio adaptable a sus operaciones.'
          ]"
          :imgUrl="serviceImg4"
          primaryColor="#FFCC68"
          secondaryColor="#FEFFF0"
          orientation="vertical"
        />
        <ServiceCard
          title="VIGILANCIA Y TRANSFERENCIA ELECTRÓNICA"
          description="Convertimos tus ideas en realidad, creando un código robusto y personalizado que se adapta
        perfectamente a sus operaciones"
          :features="[
            'Servicio adaptable a sus operaciones.',
            'Servicio adaptable a sus operaciones.'
          ]"
          :imgUrl="serviceImg5"
          primaryColor="#FF6868"
          secondaryColor="#FFF0F0"
          orientation="vertical"
        />
      </div>

      <!--
      PRIMERO NECESITAMOS CREAR LAS CLASES EN EL HTML
      LUEGO AÑADIRLAS AL SCSS EN AMBOS LUGARES (RESPONSIVE)
      AJUSTAR EL CÒDIGO

      DEFINIR COMO SE VA A MOSTRAR EL CONTENIDO DEL BOTON VER MAS

      ARREGLAR BOTON PORQEU NO VA A ACORDE A LO ESPERADO
      
      
      -->

      <ServiceCard
        title="SERVICIO ADICIONAL"
        description="Convertimos tus ideas en realidad, creando un código robusto y personalizado que se adapta
        perfectamente a sus operaciones"
        :features="[
          'Servicio adaptable a sus operaciones.',
          'Servicio adaptable a sus operaciones.'
        ]"
        :imgUrl="serviceImg6"
        primaryColor="#60BFFF"
        secondaryColor="#F0F9FF"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import url('@/assets/styles/sections/services-section.scss');
@import url('@/assets/styles/variables.scss');
</style>
