<script setup>
import { ref } from "vue";

const props = defineProps({
  type: String,
  placeholder: String,
});

const model = defineModel();
</script>

<template>
  <div>
    <input
      :type="props.type"
      :placeholder="props.placeholder"
      v-model="model"
      class="w-full h-10 mt-2 border-b-2 text-base font-main text-grey uppercase text-center outline-none"
    />
  </div>
</template>
