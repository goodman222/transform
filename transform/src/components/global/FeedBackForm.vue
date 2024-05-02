<script setup>
import { useTransformStore } from "./../../store/TransformStore";
const transformStore = useTransformStore();

const formData = {
  name: { value: "", regexp: / / },
  email: { value: "", regexp: / / },
  number: { value: null, regexp: / / },
  tariff: { value: "", regexp: / / },
};

function formValidation() {
  for (const key in formData) {
    const item = formData.key;
    if (!item.regexp.test(item.value)) {
      console.log(Ошибка);
    }
  }
}

async function sendForm() {
  //добавить валидацию
  formValidation();

  // console.log(JSON.stringify(formData));
  // fetch("./sendEmail", {
  //   method: "post",
  //   headers: {
  //     "Content-Type": "application/json;charset=utf-8",
  //   },
  //   body: JSON.stringify(formData),
  // });
  // console.log("запрос ушел");
}
</script>

<template>
  <div class="w-[571px] mx-auto">
    <SectionHeader>Оставь заявку и начни трансформацию!</SectionHeader>
    <form action.prevent="">
      <AppInput v-model="formData.name.value" type="text" placeholder="ФИО" />
      <AppInput
        v-model="formData.email.value"
        type="email"
        placeholder="email"
      />
      <AppInput
        v-model="formData.number.value"
        type="text"
        placeholder="телефон"
      />
      <DropDown
        @changeSelection="(value) => (formData.tariff = value)"
        :selectedItem="transformStore.PopUpOptions.name"
      />
      <button
        @click.prevent="sendForm()"
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

  <!--  -->
</template>
