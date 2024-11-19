<script setup>
import ButtonSolid from '@/components/ButtonSolid.vue'
defineProps({
  title: String,
  features: Array,
  description: String,
  imgUrl: String,
  primaryColor: String,
  secondaryColor: String,
  orientation: {
    type: String,
    default: 'horizontal'
  }
})
</script>
<template>
  <div class="service-card" :class="orientation" :style="{ backgroundColor: secondaryColor }">
    <div>
      <div class="top-text">SERVICIOS RUNCODE</div>
      <div class="title">{{ title }}</div>
      <div class="description">
        {{ description }}
      </div>
      <div class="features-container">
        <div class="feature" v-for="(feature, index) in features" :key="index">
          <div class="symbol">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1096_58)">
                <path
                  d="M7 13.125C10.3827 13.125 13.125 10.3827 13.125 7C13.125 3.61726 10.3827 0.875 7 0.875C3.61726 0.875 0.875 3.61726 0.875 7C0.875 10.3827 3.61726 13.125 7 13.125Z"
                  :fill="primaryColor"
                />
                <path
                  d="M10.0915 4.25833L6.1248 8.225L4.49147 6.59166L3.6748 7.40833L6.1248 9.85833L10.9081 5.075L10.0915 4.25833Z"
                  :fill="secondaryColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_1096_58">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="text">{{ feature }}</div>
        </div>
      </div>
      <div class="button-container">
        <ButtonSolid :style="{ backgroundColor: primaryColor }">Ver más</ButtonSolid>
      </div>
    </div>

    <div class="img-container">
      <img :src="imgUrl" alt="service img" />
    </div>
  </div>
</template>

<style lang="scss">
.service-card {
  // Estilos principales de la tarjeta
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  max-width: 900px;

  .top-text {
    // Estilos para el texto de la parte superior
    font-weight: 600;
    font-size: 12px;
    margin-bottom: 5px;
  }

  .title {
    // Estilos para el título
    font-weight: 800;
    font-size: 26px;
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
  }
}

.vertical {
  display: flex;
  flex-direction: column !important;
}

.horizontal {
  display: flex;
  flex-direction: row !important;
}

@media (min-width: 760px) {
  .service-card {
    flex-direction: row;
    padding: 40px;
    .top-text {
    }

    .title {
    }

    .description {
    }

    .features-container {
      .feature {
        .symbol {
        }

        .text {
        }
      }
    }

    .button-container {
    }

    .img-container {
      img {
      }
    }
  }
}
</style>
