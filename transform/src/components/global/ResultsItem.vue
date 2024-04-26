<script setup>
import { useTransformStore } from "./../../store/TransformStore";
const transformStore = useTransformStore();

const props = defineProps({
  result: Object,
  isFull: Boolean,
});

const result = props.result;
const isFull = props.isFull;

let text = result.text;

if (!isFull) {
  text = text.slice(0, 260);
  text += "... ";
}
</script>

<template>
  <!-- :style="{ width: isFull ? '50%' : 'auto' }" -->
  <div
    class="pb-6 flex"
    :style="{
      flexDirection: isFull ? 'row' : 'column',
      backgroundColor: isFull ? 'white' : '#F6F3EF',
    }"
  >
    <img
      class="object-contain h-[300px]"
      :src="result.imgURL"
      alt=""
      :style="{ width: isFull ? '40%' : '100%' }"
    />
    <div class="px-6 mt-6 mb-2">
      <h2 class="font-main font-medium text-2xl text-black uppercase">
        {{ result.name }}
      </h2>
      <p class="font-main font-normal text-base">
        {{ text }}
        <button
          class="text-grey underline underline-offset-2 decoration-1"
          @click="transformStore.openPopUp('ResultItem', result)"
          v-show="!isFull"
        >
          Читать далее
        </button>
      </p>
    </div>
  </div>
</template>
