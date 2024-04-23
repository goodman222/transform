import { defineStore } from "pinia";

export const useTransformStore = defineStore("TransformStore", {
  state: () => ({
    currentPage: "main",
  }),
});
