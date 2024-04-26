<script setup>
import { useTransformStore } from "./store/TransformStore";
const transformStore = useTransformStore();
</script>

<template>
  <div>
    <PopUp v-if="transformStore.isPopupOpen" />
    <div
      :style="{ filter: transformStore.isPopupOpen ? 'blur(4px)' : 'unset' }"
      id="blur"
    >
      <AppHeader />
      <main>
        <RouterView />
      </main>
      <AppFooter />
    </div>
  </div>
</template>
