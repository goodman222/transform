<script setup>
import { useTransformStore } from "./../../store/TransformStore";
const store = useTransformStore();
</script>

<template>
  <div class="w-[571px] mx-auto">
    <SectionHeader>Оставь заявку и начни трансформацию!</SectionHeader>
    <form action="">
      <Input type="text" placeholder="ФИО" />
      <Input type="email" placeholder="email" />
      <Input type="number" placeholder="телефон" />
      <DropDown :selectedItem="store.PopUpOptions.name" />
      <button
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
