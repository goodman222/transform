import { defineStore } from "pinia";

export const useTransformStore = defineStore("TransformStore", {
  state: () => ({
    currentPage: "main",
    isPopupOpen: false,
    popUpType: "",
    PopUpOptions: {
      name: "",
    },
  }),

  actions: {
    openPopUp(type, options) {
      this.isPopupOpen = !this.isPopupOpen;
      this.popUpType = type;
      this.PopUpOptions = options;
    },
  },
});
