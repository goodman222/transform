<script setup>
import { ref } from "vue";

import { useTariffsStore } from "./../../store/TariffsStore";
const TariffsStore = useTariffsStore();

const props = defineProps({
  selectedItem: { type: String, default: "программа" },
  errorText: String,
  isError: Boolean,
});

const emits = defineEmits(["changeSelection"]);

const dropdownOpen = ref(false);

const selectedItem = ref(props.selectedItem);

const placeholder = "программа";
</script>

<template>
  <div>
    <div class="cursor-default relative">
      <!-- Верхяя строчка дропдауна -->
      <div
        class="flex flex-row items-center justify-center border-b-2 h-10 text-grey uppercase font-main"
        @click="dropdownOpen = !dropdownOpen"
      >
        {{ selectedItem ? selectedItem : placeholder }}
        <img src="./../../assets/img/Arrow.svg" class="ml-3" alt="" />
      </div>
      <p class="text-red-500">
        {{ props.isError ? props.errorText : "&nbsp;" }}
      </p>

      <!-- Варианты выбора -->
      <div v-show="dropdownOpen" class="absolute top-9 bg-beige200 w-full">
        <div
          v-for="(item, index) in TariffsStore.namesArray"
          :key="index"
          @click="
            selectedItem = item;
            emits('changeSelection', selectedItem);
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
