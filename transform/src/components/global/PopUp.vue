<script setup>
import { useTransformStore } from "./../../store/TransformStore";
const store = useTransformStore();

function closePopUp() {
  store.isPopupOpen = !store.isPopupOpen;
  store.popUpType = "";
  store.PopUpOptions = {};
}

const content = {
  imgURL: "./src/assets/img/Results/1.png",
  name: "Маргарита",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ",
};
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
        <FeedBackForm v-if="store.popUpType === 'FeedBackForm'" />
        <ResultsItem
          v-else-if="store.popUpType === 'ResultItem'"
          :result="store.PopUpOptions"
          :isFull="true"
        />
      </div>
    </div>
  </div>
</template>
