<script setup>
import { useTransformStore } from "./../../store/TransformStore";
const transformStore = useTransformStore();
</script>

<template>
  <div class="w-[571px] mx-auto">
    <SectionHeader>Оставь заявку и начни трансформацию!</SectionHeader>
    <form action="">
      <AppInput type="text" placeholder="ФИО" />
      <AppInput type="email" placeholder="email" />
      <AppInput type="number" placeholder="телефон" />
      <DropDown :selectedItem="transformStore.PopUpOptions.name" />
      <button
        @click.prevent=""
        type="submit"
        class="uppercase bg-beige200 text-black w-full py-4"
      >
        отправить
      </button>
      <p class="text-center font-main text-base text-gray-300 mt-3">
        Нажимая на кнопку, вы соглашаетесь с
        <a class="underline" href="">политикой конфиденциальности</a>
      </p>
    </form>
  </div>
</template>
