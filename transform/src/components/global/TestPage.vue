<script setup>
import { reactive, computed } from "vue";

const author = {
  name: "John Doe",
  books: [
    "Vue 2 - Advanced Guide",
    "Vue 3 - Basic Guide",
    "Vue 4 - The Mystery",
  ],
};

// ref вычисляемого свойства
const publishedBooksMessage = computed(() => {
  return author.books.length > 2 ? "Да" : "Нет";
});
</script>

<template>
  <div class="flex flex-col">
    <p>Есть опубликованные книги:</p>
    <span>{{ publishedBooksMessage }}</span>
    <button @click="author.books.shift()">change</button>
  </div>
</template>
