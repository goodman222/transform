<script setup>
import { reactive, ref } from "vue";
import { useTransformStore } from "./../../store/TransformStore";
const transformStore = useTransformStore();

const formData = reactive({
  name: {
    value: "mister",
    regexp: /^[А-Яа-яA-Za-z\s]{2,}$/,
    isError: false,
  },
  email: {
    value: "monster@asfsdf.asrf",
    regexp: /^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,
    isError: false,
  },
  number: {
    value: "+79394446767",
    regexp: /^\+79[0-9]{9}$/,
    isError: false,
  },
  tariff: {
    value: transformStore.PopUpOptions.name,
    regexp: /./,
    isError: false,
  },
});

let isEmailSend = ref(false); //письмо отправлено
let isEmailSended = ref(false); // письмо отправляется

function formValidation() {
  let isError = false;
  for (const key in formData) {
    const item = formData[key];
    item.isError = false;
    if (!item.regexp.test(item.value)) {
      item.isError = true;
      isError = true;
    }
  }
  return isError;
}

function getSendData() {
  const sendData = {};
  for (const key in formData) {
    sendData[key] = formData[key]["value"];
  }
  return sendData;
}

async function sendForm() {
  if (formValidation()) {
    return;
  }

  const sendData = getSendData();
  console.log(sendData);
  isEmailSended.value = true;
  const sendResult = await fetch("./sendEmail", {
    method: "post",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(sendData),
  });

  isEmailSend.value = true;
  // console.log("email sended!");
}
</script>

<template>
  <div class="w-[571px] mx-auto">
    <div v-if="!isEmailSend">
      <SectionHeader>Оставь заявку и начни трансформацию!</SectionHeader>
      <form action.prevent="">
        <AppInput
          v-model="formData.name.value"
          errorText="Введите корректное имя"
          :isError="formData.name.isError"
          @change="formData.name.isError = false"
          type="text"
          placeholder="ФИО"
        />
        <AppInput
          v-model="formData.email.value"
          errorText="Введите корректную почту"
          :isError="formData.email.isError"
          @change="formData.email.isError = false"
          type="email"
          placeholder="email"
        />
        <AppInput
          v-model="formData.number.value"
          errorText="Введите номер в формате +7**********"
          :isError="formData.number.isError"
          @change="formData.number.isError = false"
          type="text"
          placeholder="телефон"
        />
        <DropDown
          @changeSelection="
            (value) => {
              formData.tariff.value = value;
              formData.tariff.isError = false;
            }
          "
          :selectedItem="transformStore.PopUpOptions.name"
          errorText="Выберите программу"
          :isError="formData.tariff.isError"
        />
        <button
          @click.prevent="sendForm()"
          type="submit"
          class="uppercase bg-beige200 text-black w-full py-4"
          :disabled="isEmailSended"
        >
          отправить
        </button>
        <p class="text-center font-main text-base text-gray-300 mt-3">
          Нажимая на кнопку, вы соглашаетесь с
          <a class="underline" href="">политикой конфиденциальности</a>
        </p>
      </form>
    </div>

    <div v-if="isEmailSend">
      <SectionHeader>Письмо отправлено!</SectionHeader>
    </div>
  </div>

  <!--  -->
</template>
