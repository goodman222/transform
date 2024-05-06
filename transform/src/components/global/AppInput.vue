<script setup>
import { ref } from "vue";

const props = defineProps({
  type: String,
  placeholder: String,
  errorText: String,
  isError: Boolean,
});

const emits = defineEmits(["change"]);
const model = defineModel();
</script>

<template>
  <div>
    <input
      :type="props.type"
      :placeholder="props.placeholder"
      @input="emits('change')"
      v-model="model"
      class="w-full h-10 mt-2 border-b-2 text-base font-main text-grey uppercase text-center outline-none"
    />
    <p class="text-red-500">{{ props.isError ? props.errorText : "&nbsp;" }}</p>
  </div>
</template>
