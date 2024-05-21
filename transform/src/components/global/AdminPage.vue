<script setup>
import AdminMenu from "../Admin/AdminMenu.vue";
import ResultsAdminPage from "../Admin/ResultsAdminPage.vue";
import TariffsAdminPage from "../Admin/TariffsAdminPage.vue";

import { useAdminStore } from "../../store/AdminStore";
const adminStore = useAdminStore();
</script>

<template>
  <div class="p-20">
    <AdminMenu></AdminMenu>
    <ResultsAdminPage v-if="adminStore.currentPage === 'results'" />
    <TariffsAdminPage v-if="adminStore.currentPage === 'tariffs'" />
  </div>
</template>
