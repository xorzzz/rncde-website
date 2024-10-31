<script setup>
defineProps({
  primaryColor: String,
  secondaryColor: {
    type: String,
    default: 'white'
  }
})
</script>
<template>
  <button class="solid-button" :style="{ backgroundColor: primaryColor, color: secondaryColor }">
    <slot />
  </button>
</template>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.solid-button {
  height: 48px;
  padding: 0 30px;
  color: $rc-white;
  border-radius: 100px;
  border: none;
  outline: none;

  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;

  //background-image: linear-gradient(145deg, $rc-sky-5, $rc-sky);
  //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: ease-in-out all 0.3s;
  //background-color: red;
}

.solid-button:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  color: $rc-blue;
  cursor: pointer;
}
</style>
