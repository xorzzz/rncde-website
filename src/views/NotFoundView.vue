<script setup>
import ButtonSolid from '@/components/Buttons/ButtonSolid.vue'
</script>

<template>
  <div class="main-notfound">
    <div class="section-container f-content">
      <div class="row-container c-content">
        <div class="side-container img-container">
          <img src="@/assets/images/not found/image.svg" alt="" />
        </div>
        <div class="side-container text">
          <div class="title rc-title">Algo salió mal</div>
          <div class="description">A veces sucede, puedes actualizar la página.</div>
          <div>
            <RouterLink to="/" class="no-deco">
              <ButtonSolid primaryColor="bg-blue">
                <i class="fi fi-rr-house-chimney"></i>

                Inicio
              </ButtonSolid>
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="row-container"></div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.main-notfound {
  //background-color: rgb(126, 126, 126);
  .f-content {
    .c-content {
      height: 90vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 40px;
      .text {
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        max-width: 500px;
        .title {
          font-family: 'Inter', sans-serif;
          font-weight: bolder;
          font-size: 26px;
          font-weight: 900;
          color: $rc-black-2;
        }

        .description {
          text-align: center;
          margin-bottom: 2rem;
        }
      }
      .img-container {
        width: 400px;
        max-width: 500px;

        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
