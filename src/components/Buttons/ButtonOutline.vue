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
  textColor: {
    type: String,
    default: 'text-blue'
  },
  iconPosition: {
    type: String,
    default: 'right'
  }
})
</script>

<template>
  <button
    :class="['outline-' + primaryColor, 'outline-' + textColor, iconPosition]"
    class="outline-button-s"
  >
    <slot />
  </button>
</template>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.outline-button-s {
  height: 48px;
  padding: 0 30px;
  border-radius: 100px;
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
  transform: scale(0.95);
}

.outline-bg-sky {
  border: 2px solid $rc-sky;
  color: $rc-blue;
}

.outline-bg-blue {
  border: 2px solid $rc-blue;
  color: $rc-blue;
}

.outline-left {
  flex-direction: row-reverse;
}

.outline-right {
  flex-direction: row;
}

.outline-text-blue {
  color: $rc-blue;
}

.outline-text-sky {
  color: $rc-sky;
}
</style>
