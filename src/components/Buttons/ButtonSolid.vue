<script setup>
//import { ref } from 'vue'
import '@/assets/styles/variables.scss'
import '@/assets/variables.css'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  primaryColor: {
    type: String,
    enum: ['blue', 'sky', 'white', 'black'],
    default: 'blue'
  },
  textColor: {
    type: String,
    enum: ['blue', 'sky', 'white', 'black'],
    default: 'white'
  }
})
</script>

<template>
  <button :class="['solid-bg-' + primaryColor, 'solid-text-' + textColor]" class="solid-button-s">
    <slot />
  </button>
</template>

<style lang="scss">
@import '@/assets/styles/variables.scss';

//BUTTON STYLE
.solid-button-s {
  height: 48px;
  padding: 0 30px;
  border-radius: 6px;
  border: none;
  outline: none;

  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;

  display: flex;
  align-items: center;
  column-gap: 10px;

  transition: ease-in-out all 0.3s;

  i {
    display: flex;
    align-items: center;
  }
}
.solid-button-s:hover {
  cursor: pointer;
  column-gap: 16px;
}
.solid-button-s:active {
  transform: scale(0.95);
}

//BACKGROUND STYLE
.solid-bg-blue {
  background-image: linear-gradient(270deg, $rc-blue-2, $rc-blue-3);
}

.solid-bg-sky {
  background-image: linear-gradient(270deg, $rc-sky-2, $rc-sky-3);
}

.solid-bg-white {
  border: 2px solid $rc-white-2;
}

.solid-bg-black {
  border: 2px solid $rc-black-2;
}

//TEXT STYLE
.solid-text-blue {
  color: $rc-blue;
}
.solid-text-sky {
  color: $rc-sky;
}
.solid-text-white {
  color: $rc-white;
}
.solid-text-black {
  color: $rc-black-2;
}
</style>
