<script setup>
import { ref } from "vue";

const props = defineProps({
  type: String,
  placeholder: String,
});
const dropdownItems = [
  "базовая программа",
  "Расширенная программа",
  "Индивидуальное наставничество",
];
const dropdownOpen = ref(false);
const selectedItem = ref(props.placeholder);
</script>

<template>
  <div>
    <!-- Инпут в виде дропдауна -->
    <div v-if="props.type === 'dropdown'" class="cursor-default relative">
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
          v-for="(item, index) in dropdownItems"
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

    <!-- Другие инпуты -->
    <input
      v-else
      :type="props.type"
      :placeholder="props.placeholder"
      class="w-full h-10 mt-2 border-b-2 text-base font-main text-grey uppercase text-center outline-none"
    />
  </div>
</template>
