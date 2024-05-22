<script setup>
import { storeToRefs } from "pinia";
import { useTariffsStore } from "../../store/TariffsStore";

import TariffItemAdmin from "./TariffItemAdmin.vue";
const tariffsStore = useTariffsStore();

import { useAdminStore } from "./../../store/AdminStore";
const adminStore = useAdminStore();

let { tariffs } = storeToRefs(tariffsStore);

function deleteTariff(index) {
  console.log("delete item");
  console.log(tariffs.value);
  tariffs.value.splice(index, 1);
}

function addItem() {
  tariffs.value.push({
    name: "Новая программа",
    contnet: [
      {
        value: "",
        isEdited: true,
        id: 0,
      },
    ],
    cost: 4000,
    bgColor: "#F6F3EF",
  });
}

function saveChanges() {
  adminStore.saveChanges("tariffs", tariffs._object.tariffs);
}
</script>

<template>
  <section class="px-20">
    <SectionHeader>Программы</SectionHeader>
    <div
      class="w-full grid grid-rows-1 gap-x-6"
      :style="{ gridTemplateColumns: `repeat(${tariffs.length}, 1fr)` }"
    >
      <TariffItemAdmin
        v-for="(item, index) in tariffs"
        :key="index"
        :tariff="item"
        @delete="deleteTariff(index)"
      />
    </div>
    <div class="flex flex-row justify-center mt-3">
      <button @click="addItem()" class="p-4 bg-white border-2 mb-2">
        Добавить
      </button>
      <button
        @click="saveChanges()"
        class="p-4 bg-green-500 border-2 mb-2 ml-1"
      >
        Сохранить
      </button>
    </div>
  </section>
</template>
