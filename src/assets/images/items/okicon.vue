<template>
  <svg
    class="owo"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="red"
      d="M7 13.125C10.3827 13.125 13.125 10.3827 13.125 7C13.125 3.61726 10.3827 0.875 7 0.875C3.61726 0.875 0.875 3.61726 0.875 7C0.875 10.3827 3.61726 13.125 7 13.125Z"
    />
  </svg>
</template>

<style>
.owo {
  background-color: var(--color);
}
</style>
<script>
import { defineProps, ref } from 'vue'
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  color: { type: String, default: 'blue' }
})

const coll = ref(props.color)
</script>
