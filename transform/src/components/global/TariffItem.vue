<script setup>
import { useTransformStore } from "./../../store/TransformStore";
const store = useTransformStore();

const props = defineProps({
  tariff: Object,
});

const tariff = props.tariff;
</script>

<template>
  <div class="">
    <div
      class="flex flex-col justify-between items-center w-full min-h-[572px] px-8 py-12"
      :style="{ backgroundColor: tariff.bgColor }"
    >
      <div>
        <h2 class="font-main text-2xl font-medium uppercase text-center mb-6">
          {{ tariff.name }}
        </h2>
        <p class="font-main text-base text-grey text-center mb-8">
          Что тебя ждёт?
        </p>
        <ul>
          <li
            v-for="(item, index) in tariff.contnet"
            :key="index"
            class="flex flex-row align-center before:content-[url('./assets/img/check.png')] before:pt-[2px] before:mr-1 mb-4"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <p class="uppercase text-grey font-main text-3xl font-bold">
        {{ tariff.cost }} рублей
      </p>
    </div>

    <button
      class="w-full bg-black text-white font-main text-base uppercase py-6 mt-4"
      @click="store.openPopUp('FeedBackForm', { name: tariff.name })"
    >
      Оставить заявку
    </button>
  </div>
</template>
