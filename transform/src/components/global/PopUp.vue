<script setup>
import { useTransformStore } from "./../../store/TransformStore";
const transformStore = useTransformStore();

function closePopUp() {
  transformStore.isPopupOpen = !transformStore.isPopupOpen;
  transformStore.popUpType = "";
  transformStore.PopUpOptions = {};
}
</script>

<template>
  <div
    @click.stop="closePopUp()"
    class="w-screen h-screen fixed z-40 flex justify-center items-center py-20"
  >
    <div
      @click.stop
      class="bg-white drop-shadow p-16 relative max-w-[80%] max-h-[90vh] overflow-auto"
    >
      <button class="absolute w-4 h-4 top-4 right-4" @click="closePopUp()">
        <img src="./../../assets/img/x.png" alt="" />
      </button>
      <div>
        <FeedBackForm v-if="transformStore.popUpType === 'FeedBackForm'" />
        <ResultsItem
          v-else-if="transformStore.popUpType === 'ResultItem'"
          :result="transformStore.PopUpOptions"
          :isFull="true"
        />
      </div>
    </div>
  </div>
</template>
