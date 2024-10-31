<script setup>
//import { ref } from 'vue'
import '@/assets/styles/variables.scss'
import '@/assets/variables.css'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  primaryColor: {
    type: String,
    default: 'bg-blue'
  },
  iconPosition: {
    type: String,
    default: 'right'
  }
})
</script>

<template>
  <button :class="['solid-' + primaryColor, 'solid-' + iconPosition]" class="solid-button-s">
    <slot />
  </button>
</template>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.solid-button-s {
  height: 48px;
  padding: 0 30px;
  border-radius: 12px;
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

.solid-bg-sky {
  background-image: linear-gradient(135deg, $rc-sky-1, $rc-sky-3);
  color: white;
}

.solid-bg-blue {
  background-image: linear-gradient(135deg, $rc-blue-1, $rc-blue);
  color: white;
}

.solid-left {
  flex-direction: row-reverse;
}

.solid-right {
  flex-direction: row;
}
</style>
