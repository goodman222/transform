<script setup>
import { useTransformStore } from "./../../store/TransformStore";
const props = defineProps({
  textColor: String,
  targetPage: String,
});

const store = useTransformStore();

function changePage() {
  store.currentPage = props.targetPage;
}
</script>

<template>
  <button @click="changePage" class="uppercase font-medium text-base font-main">
    <slot></slot>
  </button>
</template>

<style scoped></style>
