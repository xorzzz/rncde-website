<script setup>
import { ref } from 'vue'
import ButtonColor from '@/components/Buttons/ButtonColor.vue'
import RuncodeIcon from '@/components/Utils/RuncodeIcon.vue'

defineProps({
  title: String,
  features: Array,
  description: String,
  imgUrl: String,
  primaryColor: String,
  secondaryColor: String,
  orientation: {
    type: String,
    default: 'row'
  },
  imgRight: {
    type: Boolean,
    default: true
  }
})

const showArticle = ref(false)
</script>
<template>
  <div class="service-card" :style="[{ '--orientation': orientation }]">
    <div
      class="content-container"
      :class="showArticle ? 'hide-content' : ''"
      :style="{ '--text-color': primaryColor }"
    >
      <div class="top-info">
        <RuncodeIcon color="gray" size="20" />

        <div class="top-text" style="color: gray">SERVICIOS RUNCODE</div>
      </div>
      <slot class="content-card" />
      <div class="button-container">
        <ButtonColor :primaryColor="primaryColor" @click="showArticle = !showArticle">
          {{ showArticle ? 'Ver menos' : 'Ver más' }}
        </ButtonColor>
      </div>
    </div>

    <div class="img-container">
      <img :src="imgUrl" alt="service img" />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.service-card {
  // Estilos principales de la tarjeta
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  border-radius: 20px;
  padding: 20px;
  border: 2px solid rgba(198, 198, 198, 0.1);
  background-color: rgba(245, 250, 254, 0.1);

  .content-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .top-info {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .top-text {
      font-weight: 500;
      font-size: 12px;
      color: #61c0ff0d;
    }

    h2 {
      // Estilos para el título
      font-weight: 800;
      font-size: 26px;
      //color: var(--text-color);
      color: $rc-gray;
    }
    p {
      // Estilos para la descripción
      margin: 15px 0;
      text-align: justify;
      color: $rc-black-2;
    }
    ul {
      margin-bottom: 15px;
      list-style-type: none; /* Elimina los marcadores predeterminados */
      padding: 0;
    }

    li {
      position: relative;
      padding-left: 30px; /* Espacio para el icono */
      color: $rc-black-2;
    }

    li::before {
      content: '\F0791'; /* Código del ícono (check-decagram) */
      font-family: 'Material Design Icons'; /* Fuente de Material Design */
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      font-size: 15px; /* Tamaño del ícono */
      color: var(--text-color);

      // color: $rc-gray-2; /* Color del ícono */
    }

    article {
      overflow: hidden; /* Oculta contenido cuando max-height está reducido */
      max-height: 0; /* Valor inicial para que esté oculto */
      opacity: 0;
      transition:
        max-height 0.6s ease-in-out,
        padding 0.6s ease-in-out,
        opacity 0.6s ease-in-out;
    }

    /*
    .article--visible {
      max-height: 1000px;
      padding-top: 0rem;
      padding-bottom: 1rem;
      opacity: 1;
    }
      */
  }

  .hide-content {
    article {
      max-height: 1000px; /* Ajusta según la altura que esperes */
      padding-top: 0rem; /* Añade espacio vertical solo cuando es visible */
      padding-bottom: 1rem;
      opacity: 1;
    }
  }

  .img-container {
    width: 100%;
    // Contenedor de la imagen
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      mix-blend-mode: darken;
      // Estilos para la imagen
    }

    .content-card {
      display: flex;
      flex-direction: row;
      .title {
        // Estilos para el título
        font-weight: 800;
        font-size: 26px;
        color: skyblue;
      }

      .description {
        // Estilos para la descripción
        margin: 15px 0;
        text-align: justify;
      }

      .features-container {
        // Contenedor de las características
        margin-bottom: 15px;
        .feature {
          display: flex;
          // Cada característica individual
          .symbol {
            // Estilo del símbolo "+"
            display: flex;
            align-items: center;
            margin-right: 5px;
          }

          .text {
            // Estilo del texto de la característica
          }
        }
      }

      .button-container {
        // Estilos para el botón
        margin-bottom: 15px;
      }
    }

    .top-text {
      // Estilos para el texto de la parte superior
      font-weight: 600;
      font-size: 12px;
      margin-bottom: 5px;
    }

    h2 {
      // Estilos para el título
      font-weight: 800;
      font-size: 26px;
    }

    p {
      // Estilos para la descripción
      margin: 15px 0;
      text-align: justify;
    }

    .features-container {
      // Contenedor de las características
      margin-bottom: 15px;
      .feature {
        display: flex;
        // Cada característica individual
        .symbol {
          // Estilo del símbolo "+"
          display: flex;
          align-items: center;
          margin-right: 5px;
        }

        .text {
          // Estilo del texto de la característica
        }
      }
    }

    .button-container {
      // Estilos para el botón
      margin-bottom: 15px;
    }
  }
}

.vertical {
  display: flex;
  flex-direction: column;
}

.horizontal {
  display: flex;
  flex-direction: column !important;
}

@media (min-width: 760px) {
  .service-card {
    padding: 50px;
    gap: 50px;
    flex-direction: var(--orientation);

    .content-container {
      /*
      article {
        max-height: 1000px;
        padding-top: 0rem;
        padding-bottom: 1rem;
        opacity: 1;
      }

      */

      .button-container {
        //display: none;
      }
    }

    .top-text {
    }

    .title {
    }

    .description {
    }

    ul {
      margin-left: 1rem;
    }

    .features-container {
      .feature {
        .symbol {
        }

        .text {
        }
      }
    }

    .img-container {
      img {
      }
    }
  }

  .horizontal {
    display: flex;
    flex-direction: row !important;
  }
}
</style>
