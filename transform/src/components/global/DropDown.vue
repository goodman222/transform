<script setup>
import { ref } from "vue";

import { useTariffsStore } from "./../../store/TariffsStore";
const store = useTariffsStore();

const props = defineProps({
  selectedItem: { type: String, default: "программа" },
});

const dropdownOpen = ref(false);
const selectedItem = ref(props.selectedItem);
</script>

<template>
  <div>
    <div class="cursor-default relative">
      <!-- Верхяя строчка дропдауна -->
      <div
        class="flex flex-row items-center justify-center h-10 ml-7 text-grey uppercase font-main"
        @click="dropdownOpen = !dropdownOpen"
      >
        {{ selectedItem }}
        <img src="./../../assets/img/Arrow.svg" class="ml-3" alt="" />
      </div>

      <!-- Варианты выбора -->
      <div v-show="dropdownOpen" class="absolute bg-beige200 w-full">
        <div
          v-for="(item, index) in store.namesArray"
          :key="index"
          @click="
            selectedItem = item;
            dropdownOpen = !dropdownOpen;
          "
          class="text-grey uppercase text-center border-b-2 border-gray-400 h-10 flex justify-center items-center"
        >
          <p>{{ item }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
