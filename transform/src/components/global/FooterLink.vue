<script setup>
const props = defineProps({
  link: String,
});
</script>

<template>
  <a
    :href="props.link"
    class="font-main font-medium text-base text-black underline uppercase"
    ><slot></slot
  ></a>
</template>
