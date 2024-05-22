<script setup>
import { ref } from "vue";
const props = defineProps({
  coach: Object,
});

const emits = defineEmits(["delete", "uploadPhoto"]);

const coach = props.coach;
const isEdited = ref(coach.isEdited);

function addCharacteristicItem() {
  let itemId = 0;
  if (coach.characteristics.length) {
    itemId = coach.characteristics[coach.characteristics.length - 1]["id"] + 1;
  }
  coach.characteristics.push({
    value: "",
    isEdited: true,
    id: itemId,
  });
}
</script>

<template>
  <div>
    <div class="max-w-[770px] flex flex-col items-center" v-if="isEdited">
      <img :src="coach.imgURL" alt="" class="h-[720px] object-cover" />
      <p>input type file</p>

      <input
        type="text"
        v-model="coach.name"
        placeholder="Введите имя"
        class="mx-auto mt-3 outline outline-2"
      />
      <input
        type="text"
        v-model="coach.position"
        placeholder="Введите должность"
        class="mx-auto mt-3 outline outline-2"
      />
      <ul class="mt-8">
        <li
          class="text-center font-main text-base font-normal mx-auto mb-4 before:content-none"
          v-for="(item, index) in coach.characteristics"
          :key="index"
        >
          <input
            type="text"
            v-if="item.isEdited"
            v-model="item.value"
            class="mx-auto mt-3 outline outline-2"
          />

          <p v-else>{{ item.value }}</p>
          <div>
            <button class="mr-4" @click="item.isEdited = !item.isEdited">
              <img src="../../assets/img/pencil.png" alt="" class="w-5 h-5" />
            </button>
            <button @click="coach.characteristics.splice(index, 1)">
              <img src="../../assets/img/bin.png" class="w-5 h-5" />
            </button>
          </div>
        </li>
      </ul>
      <button class="underline" @click="addCharacteristicItem()">
        Добавить
      </button>
    </div>
    <div class="max-w-[770px]" v-else>
      <img :src="coach.imgURL" alt="" class="h-[720px] object-cover" />
      <h2 class="font-main font-medium uppercase text-2xl text-center mt-10">
        {{ coach.name }}
      </h2>
      <p class="font-main font-normal text-grey uppercase text-center mt-2">
        {{ coach.position }}
      </p>
      <ul class="mt-8">
        <li
          class="text-center font-main text-base font-normal mx-auto mb-4"
          v-for="(item, index) in coach.characteristics"
          :key="index"
        >
          {{ item.value }}
        </li>
      </ul>
    </div>
    <div class="w-full flex flex-col mt-4">
      <button @click="isEdited = !isEdited" class="p-4 bg-white border-2 mb-2">
        {{ isEdited ? "Сохранить" : "Редактировать" }}
      </button>
      <button @click="emits('delete')" class="p-4 bg-red-300 border-2">
        Удалить
      </button>
    </div>
  </div>
</template>

<style>
li:before {
  content: "—";
  position: relative;
  left: -5px;
}
</style>
