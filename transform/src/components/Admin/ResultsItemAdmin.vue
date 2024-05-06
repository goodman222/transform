<script setup>
import { ref } from "vue";
import { useTransformStore } from "./../../store/TransformStore";
const transformStore = useTransformStore();
const props = defineProps({
  result: Object,
  index: Number,
});

const emits = defineEmits(["delete", "uploadPhoto"]);
const result = props.result;
let text = result.text;

const isEdited = ref(false);

function fileUpload(e) {
  const file = e.target.files[0];
  console.log(file);
  emits("uploadPhoto", [file, props.index]);
}
</script>

<template>
  <div class="pb-6 flex bg-beige100 flex-col justify-between">
    <div>
      <img
        class="object-contain h-[300px] w-full"
        :src="result.imgURL"
        alt=""
      />
      <div class="px-6 mt-6 mb-2">
        <input
          v-if="isEdited"
          @change="fileUpload"
          type="file"
          accept=".jpg, .png"
          class="mb-2"
        />
        <h2
          class="font-main font-medium text-2xl text-black uppercase"
          v-if="!isEdited"
        >
          {{ result.name }}
        </h2>
        <div v-else class="mb-5">
          <input type="text" v-model="result.name" />
        </div>
        <p v-if="!isEdited" class="font-main font-normal text-base">
          {{ result.text }}
        </p>
        <textarea
          v-else
          v-model="result.text"
          name=""
          id=""
          rows="10"
          class="w-full"
        ></textarea>
      </div>
    </div>
    <div class="w-full flex flex-col">
      <button @click="isEdited = !isEdited" class="p-4 bg-white border-2 mb-2">
        {{ isEdited ? "Сохранить" : "Редактировать" }}
      </button>
      <button @click="emits('delete')" class="p-4 bg-red-300 border-2">
        Удалить
      </button>
    </div>
  </div>
</template>
