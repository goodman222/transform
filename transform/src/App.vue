<script setup>
import { ref, toRefs } from "vue";

import { useTransformStore } from "./store/TransformStore";
import TariffsPage from "./components/global/TariffsPage.vue";
import ResultsPage from "./components/global/ResultsPage.vue";
import ContactsPage from "./components/global/ContactsPage.vue";
const store = useTransformStore();
</script>

<template>
  <div>
    <Header />
    <main>
      <MainPage v-if="store.currentPage === 'main'" />
      <AboutUsPage v-if="store.currentPage === 'aboutUs'" />
      <TariffsPage v-if="store.currentPage === 'tariffs'" />
      <ResultsPage v-if="store.currentPage === 'results'" />
      <ContactsPage v-if="store.currentPage === 'contacts'" />
    </main>
    <Footer />
  </div>
</template>
