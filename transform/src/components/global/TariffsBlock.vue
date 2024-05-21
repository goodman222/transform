<script setup>
import { storeToRefs } from "pinia";
import { useTariffsStore } from "../../store/TariffsStore";
const tariffsStore = useTariffsStore();

let { tariffs } = storeToRefs(tariffsStore);
</script>

<template>
  <section class="px-20">
    <SectionHeader>Программы</SectionHeader>
    <div
      class="w-full grid grid-rows-1 gap-x-6"
      :style="{ gridTemplateColumns: `repeat(${tariffs.length}, 1fr)` }"
    >
      <TariffItem
        v-for="(item, index) in tariffs"
        :key="item.id"
        :tariff="item"
      />
    </div>
  </section>
</template>
