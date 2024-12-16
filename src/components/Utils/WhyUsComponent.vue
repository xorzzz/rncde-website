<script setup>
import ButtonSolid from '@/components/Buttons/ButtonSolid.vue'
</script>

<template>
  <div class="why-section">
    <div class="img-container">
      <img src="@\assets\images\home\why-runcode-mb.png" alt="" />
    </div>

    <div class="container">
      <h2 class="rc-subtitle">SOBRE NOSOTROS</h2>
      <div class="description">
        La eficiencia y la eficacia de nuestras soluciones, son producto de nuestro compromiso con
        valores sólidos corporativos y con cada objetivo de nuestros clientes.
      </div>
      <div class="button-container">
        <RouterLink to="/why-us">
          <ButtonSolid primary-color="blue">Ver más</ButtonSolid>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.why-section {
  display: flex;
  flex-direction: column;

  gap: 10%;
  .img-container {
    padding: 20px;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      // imagen
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    .description {
      text-align: justify;
      // descripción de valores
    }
    .button-container {
      div {
        // botón ver más
      }
    }
  }
}

@media (min-width: 720px) {
  .why-section {
    flex-direction: row;
    .img-container {
      max-width: 540px;
      img {
      }
    }
    .container {
      max-width: 400px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: 40px;
      .description {
        text-align: justify;
        // descripción de valores
      }
      .button-container {
        div {
          // botón ver más
        }
      }
    }
  }
}
</style>
