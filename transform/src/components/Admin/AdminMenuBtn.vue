<script setup>
import { useAdminStore } from "../../store/AdminStore";
const adminStore = useAdminStore();
const props = defineProps({
  targetPage: String,
});
</script>

<template>
  <div>
    <button
      class="p-3 border-2"
      :class="{ 'menu-active': props.targetPage === adminStore.currentPage }"
      @click="adminStore.currentPage = props.targetPage"
    >
      <slot></slot>
    </button>
  </div>
</template>

<style>
.menu-active {
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))
    drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
  background-color: rgba(183, 216, 205, 0.1);
}
</style>
