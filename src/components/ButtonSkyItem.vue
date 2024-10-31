<script setup></script>
<template>
  <button class="button-sky"><slot /></button>
</template>

<style lang="scss">
@import '@/assets/styles/variables.scss';
.button-sky {
  padding: 15px 30px;
  color: $rc-white;
  border-radius: 10px;
  width: fit-content;
  border: none;
  outline: none;
  //color: $rc-black;
  font-family: 'Inter', sans-serif;
  font-weight: 500;

  border-radius: 7px;
  background-image: linear-gradient(145deg, $rc-blue-5, $rc-blue);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra del botón */
  transition: ease-in-out all 0.3s;
}

.button-sky:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Sombra al pasar el ratón */
  transform: scaleX((1.03));
  color: $rc-white;
  cursor: pointer;
}
</style>
