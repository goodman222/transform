<script setup>
import AdminMenu from "../Admin/AdminMenu.vue";
import ResultsAdminPage from "../Admin/ResultsAdminPage.vue";

import { useAdminStore } from "../../store/AdminStore";
const adminStore = useAdminStore();
</script>

<template>
  <div class="p-20">
    <AdminMenu></AdminMenu>
    <ResultsAdminPage />
  </div>
</template>
