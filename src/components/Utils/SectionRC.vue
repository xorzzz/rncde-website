<script setup>
const props = defineProps({
  class: {
    type: String,
    default: ''
  },

  bgClass: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <div :class="['rc-section', props.bgClass]">
    <div :class="['rc-content', props.class]">
      <slot />
    </div>
  </div>
</template>
<style lang="scss">
@import '@/assets/styles/variables.scss';

// DISPOSICIÓN DE ELEMENTOS
.rc-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .rc-content {
    width: calc(100% - 60px);
    max-width: 1600px;
  }
}

@media (min-width: 720px) {
  .rc-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .rc-content {
      width: calc(86%);
      max-width: 1500px;
    }
  }
}
</style>
