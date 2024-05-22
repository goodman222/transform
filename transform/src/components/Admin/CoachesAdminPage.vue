<script setup>
import CoachesItemAdmin from "./CoachesItemAdmin.vue";
import { ref } from "vue";

import { useAdminStore } from "./../../store/AdminStore";
const adminStore = useAdminStore();

async function getData() {
  const response = await fetch("./back/db/coaches.json");
  const data = await response.json();
  return data;
}

const coaches = ref([]);

getData().then((result) => (coaches.value = result));

function addItem() {
  let id = 0;
  if (coaches.value.length) {
    id = coaches.value[coaches.value.length - 1]["id"] + 1;
  }
  coaches.value.push({
    imgURL: "./src/assets/img/Coaches/2.jpg",
    name: "Екатерина",
    position: "Тренер и коуч",
    characteristics: [
      {
        value: "Инструктор Jumping",
        isEdited: false,
        id: 0,
      },
    ],
    id: id,
  });
}

function saveChanges() {
  adminStore.saveChanges("coaches", coaches.value);
}

async function sendPhoto(param) {
  const [file, index] = param;
  console.log(`file.name: ${file.name}`);
  console.log(index);

  const imgURL = `/back/images/`;
  coaches.value[index].imgURL = imgURL + file.name;

  //загрузить фото на сервер

  const formData = new FormData();
  formData.append("file", file, file.name);
  const response = await fetch("/uploadPhoto", {
    method: "POST",
    body: formData,
  });
  console.log("uploaded!");
}

function deleteCoach(index) {
  coaches.value.splice(index, 1);
}
</script>

<template>
  <div>
    <SectionHeader>Тренеры</SectionHeader>
    <div class="grid grid-cols-2 gap-6 px-20">
      <CoachesItemAdmin
        v-for="(item, index) in coaches"
        :key="item.id"
        :coach="item"
        @delete="deleteCoach(index)"
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
  </div>
</template>
