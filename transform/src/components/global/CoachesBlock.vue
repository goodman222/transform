<script setup>
import { ref } from "vue";

// const coaches = [
//   {
//     imgURL: "./src/assets/img/Coaches/1.jpg",
//     name: "Кристина",
//     position: "Тренер и нутрицолог",
//     characteristics: [
//       "Дипломированный специалист в области интегративной медицины",
//       "Тренер групповых программ",
//       "Член национального общества диетологов РФ",
//       "Тренер тренажерного зала",
//       "Инструктор Jumping",
//     ],
//   },

//   {
//     imgURL: "./src/assets/img/Coaches/2.jpg",
//     name: "Екатерина",
//     position: "Тренер и коуч",
//     characteristics: [
//       "Инструктор Jumping",
//       "Тренер тренажерного зала",
//       "Тренер групповых программ",
//       "Член национального общества диетологов РФ",
//       "Дипломированный специалист в области интегративной медицины",
//     ],
//   },
// ];

async function getData() {
  const response = await fetch("./back/db/coaches.json");
  const data = await response.json();
  return data;
}

const coaches = ref([]);

getData().then((result) => (coaches.value = result));
</script>

<template>
  <section>
    <sectionHeader>Тренеры</sectionHeader>
    <p class="text-center font-main font-normal text-base mb-16">
      Мы создаем ваши тела
    </p>
    <div
      class="w-full grid grid-rows-1 gap-x-6 justify-items-center px-20"
      :style="{
        gridTemplateColumns: `repeat(${
          coaches.length >= 3 ? 3 : coaches.length
        }, 1fr)`,
        gridTemplateRows: `repeat(${Math.ceil(coaches.length / 3)}, auto)`,
      }"
    >
      <CoachesItem
        v-for="(item, index) in coaches"
        :key="index"
        :coach="item"
      />
    </div>
  </section>
</template>
