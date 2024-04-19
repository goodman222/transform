<script setup>
import { ref } from "vue";
const count = ref(3);

function increment() {
  count.value++;
}
</script>

<template>
  <div>
    <Header />

    <h1>Привет</h1>
    <button @click="increment()">{{ count }}</button>
  </div>
</template>
