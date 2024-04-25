<script setup>
import { useTransformStore } from "./../../store/TransformStore";
const store = useTransformStore();
</script>

<template>
  <button
    @click="store.openPopUp('FeedBackForm', { name: 'программа' })"
    class="uppercase bg-beige200 px-12 py-4 font-medium text-base font-main"
  >
    оставить заявку
  </button>
</template>
