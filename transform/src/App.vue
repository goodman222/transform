<script setup>
import { ref, toRefs } from "vue";

import { useTransformStore } from "./store/TransformStore";
import FeedBackForm from "./components/global/FeedBackForm.vue";

const store = useTransformStore();
</script>

<template>
  <div>
    <PopUp v-if="store.isPopupOpen" />
    <div
      :style="{ filter: store.isPopupOpen ? 'blur(4px)' : 'unset' }"
      id="blur"
    >
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
  </div>
</template>
