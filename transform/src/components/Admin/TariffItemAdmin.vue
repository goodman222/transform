<script setup>
import { useTransformStore } from "./../../store/TransformStore";
import { ref } from "vue";
const transformStore = useTransformStore();

const { tariff, index } = defineProps({
  tariff: Object,
  index: Number,
});

const emits = defineEmits(["delete", "uploadPhoto"]);

const isEdited = ref(false);

function addContentItem() {
  let itemId;
  if (tariff.contnet.length) {
    itemId = tariff.contnet[tariff.contnet.length - 1]["id"] + 1;
  } else {
    itemId = 0;
  }
  tariff.contnet.push({
    value: "",
    isEdited: true,
    id: itemId,
  });
}
</script>

<template>
  <div class="">
    <div
      class="flex flex-col justify-between items-center w-full min-h-[572px] px-8 py-12"
      :style="{ backgroundColor: tariff.bgColor }"
    >
      <div>
        <input
          type="text"
          v-if="isEdited"
          :placeholder="tariff.name"
          v-model="tariff.name"
        />
        <h2
          v-else
          class="font-main text-2xl font-medium uppercase text-center mb-6"
        >
          {{ tariff.name }}
        </h2>

        <p class="font-main text-base text-grey text-center mb-8">
          Что тебя ждёт?
        </p>

        <ul v-if="isEdited" class="list-none">
          <li
            v-for="(item, index) in tariff.contnet"
            :key="item.id"
            class="flex flex-col align-center list-none mb-4 before:content-none"
          >
            <input type="text" v-if="item.isEdited" v-model="item.value" />

            <p v-else>{{ item.value }}</p>
            <div>
              <button class="mr-4" @click="item.isEdited = !item.isEdited">
                <img src="../../assets/img/pencil.png" alt="" class="w-5 h-5" />
              </button>
              <button @click="tariff.contnet.splice(index, 1)">
                <img src="../../assets/img/bin.png" class="w-5 h-5" />
              </button>
            </div>
          </li>
        </ul>

        <button v-if="isEdited" @click="addContentItem" class="mb-2 underline">
          Добавить
        </button>

        <ul v-else>
          <li
            v-for="(item, index) in tariff.contnet"
            :key="index"
            class="flex flex-row align-center before:content-[url('./assets/img/check.png')] before:pt-[2px] before:mr-1 mb-4"
          >
            {{ item.value }}
          </li>
        </ul>
      </div>
      <input
        type="text"
        v-if="isEdited"
        :placeholder="tariff.cost"
        v-model="tariff.cost"
      />
      <p v-else class="uppercase text-grey font-main text-3xl font-bold">
        {{ tariff.cost }} рублей
      </p>
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
