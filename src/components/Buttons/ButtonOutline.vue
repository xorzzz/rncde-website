<script setup>
//import { ref } from 'vue'
import '@/assets/styles/variables.scss'
import '@/assets/variables.css'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  primaryColor: {
    type: String,
    default: 'blue',
    enum: ['blue', 'sky', 'white', 'black']
  },
  textColor: {
    type: String,
    default: 'blue',
    enum: ['blue', 'sky', 'white', 'black']
  }
})
</script>

<template>
  <button
    :class="['outline-bg-' + primaryColor, 'outline-text-' + textColor]"
    class="outline-button-s"
  >
    <slot />
  </button>
</template>

<style lang="scss">
@import '@/assets/styles/variables.scss';

//BUTTON STYLE
.outline-button-s {
  height: 48px;
  padding: 0 30px;
  border-radius: 6px;
  border: none;
  outline: none;
  background-color: transparent;

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
.outline-button-s:hover {
  cursor: pointer;
  column-gap: 16px;
}
.outline-button-s:active {
  transform: scale(0.97);
}

//BACKGROUND STYLE
.outline-bg-blue {
  border: 2px solid $rc-blue;
}

.outline-bg-sky {
  border: 2px solid $rc-sky;
}

.outline-bg-white {
  border: 2px solid $rc-white-2;
}

.outline-bg-black {
  border: 2px solid $rc-black-2;
}

//TEXT STYLE
.outline-text-blue {
  color: $rc-blue;
}
.outline-text-sky {
  color: $rc-sky;
}
.outline-text-white {
  color: $rc-white;
}
.outline-text-black {
  color: $rc-black-2;
}
</style>
