<script setup>
const props = defineProps({
  coach: Object,
});

const coach = props.coach;
</script>

<template>
  <div class="max-w-[770px]">
    <img :src="coach.imgURL" alt="" class="h-[720px] object-cover" />
    <h2 class="font-main font-medium uppercase text-2xl text-center mt-10">
      {{ coach.name }}
    </h2>
    <p class="font-main font-normal text-grey uppercase text-center mt-2">
      {{ coach.position }}
    </p>
    <ul class="mt-8">
      <li
        class="text-center font-main text-base font-normal mx-auto mb-4"
        v-for="(item, index) in coach.characteristics"
        :key="item.id"
      >
        {{ item.value }}
      </li>
    </ul>
  </div>
</template>

<style>
li:before {
  content: "—";
  position: relative;
  left: -5px;
}
</style>
