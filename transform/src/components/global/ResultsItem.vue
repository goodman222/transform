<script setup>
const props = defineProps({
  result: Object,
});

const result = props.result;
let text = result.text.slice(0, 260);
text += "... ";
</script>

<template>
  <div class="bg-beige100 pb-6">
    <img class="object-contain w-full h-[300px]" :src="result.imgURL" alt="" />
    <div class="px-6 mt-6 mb-2">
      <h2 class="font-main font-medium text-2xl text-black uppercase">
        {{ result.name }}
      </h2>
      <p class="font-main font-normal text-base">
        {{ text
        }}<button class="text-grey underline underline-offset-2 decoration-1">
          Читать далее
        </button>
      </p>
    </div>
  </div>
</template>
