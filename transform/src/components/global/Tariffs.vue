<script setup>
import { useTariffsStore } from "./../../store/TariffsStore.js";
const store = useTariffsStore();

const tariffs = store.tariffs;
</script>

<template>
  <div class="px-20">
    <SectionHeader>Программы</SectionHeader>
    <div
      class="w-full grid grid-rows-1 gap-x-6"
      :style="{ gridTemplateColumns: `repeat(${tariffs.length}, 1fr)` }"
    >
      <TariffItem
        v-for="(item, index) in tariffs"
        :key="index"
        :tariff="item"
      />
    </div>
  </div>
</template>
