<script setup>
import { useTransformStore } from "./../../store/TransformStore";
const store = useTransformStore();
</script>

<template>
  <div
    class="w-full h-24 bg-white flex flex-row justify-between items-center px-20"
  >
    <div class="grid grid-rows-1 grid-cols-3 gap-16">
      <NavBtn :targetPage="`aboutUs`">о нас</NavBtn>
      <NavBtn :targetPage="`tariffs`">Программы</NavBtn>
      <NavBtn :targetPage="`results`">Результаты</NavBtn>
    </div>

    <btn
      @click="store.currentPage = 'main'"
      class="font-main uppercase text-2xl font-bold cursor-pointer"
      >Трансформация</btn
    >

    <div>
      <NavBtn :targetPage="`contacts`" class="mr-16">Контакты</NavBtn>
      <FeedBackBtn />
    </div>
  </div>
</template>
