import { defineStore } from "pinia";

export const useAdminStore = defineStore("AdminStore", {
  state: () => ({
    currentPage: "coaches",
  }),
});
