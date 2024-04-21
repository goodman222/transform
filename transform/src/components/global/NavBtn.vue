<script setup>
const props = defineProps({
  textColor: String,
});
</script>

<template>
  <button class="uppercase mr-16 font-medium text-base font-main">
    <slot></slot>
  </button>
</template>

<style scoped></style>
