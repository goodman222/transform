<script setup>
import AdminMenuBtn from "./AdminMenuBtn.vue";
import { useAdminStore } from "../../store/AdminStore";
const adminStore = useAdminStore();
</script>

<template>
  <div class="flex flex-row">
    <AdminMenuBtn targetPage="coaches">Тренеры</AdminMenuBtn>
    <AdminMenuBtn targetPage="tariffs">Программы</AdminMenuBtn>
    <AdminMenuBtn targetPage="results">Результаты</AdminMenuBtn>
  </div>
</template>
