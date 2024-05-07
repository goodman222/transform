<script setup>
import ResultsItemAdmin from "./ResultsItemAdmin.vue";

import { ref } from "vue";

async function getData() {
  const response = await fetch("./back/db/results.json");
  const data = await response.json();
  return data;
}

const results = ref([]);

getData().then((result) => (results.value = result));

function addItem() {
  results.value.push({
    imgURL: "./src/assets/img/Results/1.png",
    name: "",
    text: "",
    id: results.length,
  });
}

async function saveChanges() {
  const reqestData = {
    fileName: "results",
    data: results.value,
  };
  console.log(JSON.stringify(reqestData));
  const sendResult = await fetch("/saveChanges", {
    method: "post",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(reqestData),
  });
}

async function sendPhoto(param) {
  const [file, index] = param;
  console.log(file);
  console.log(index);
  //поменять название файла в объекте и обновить на сервере

  // results.value[index].imgURL = `./src/assets/img/Results/${file.name}`;

  //загрузить фото на сервер

  const formData = new FormData();
  formData.append("file", file, file.name);
  const response = await fetch("/uploadPhoto", {
    method: "POST",
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
    body: formData,
  });
  console.log("uploaded!");
}
</script>
<template>
  <div>
    <SectionHeader>Резульаты</SectionHeader>
    <div class="grid grid-cols-3 gap-6 px-20">
      <ResultsItemAdmin
        v-for="(item, index) in results"
        :key="item.id"
        :result="item"
        :index="index"
        @delete="results.splice(index, 1)"
        @uploadPhoto="sendPhoto"
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
