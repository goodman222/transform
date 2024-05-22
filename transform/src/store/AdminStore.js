import { defineStore } from "pinia";

export const useAdminStore = defineStore("AdminStore", {
  state: () => ({
    currentPage: "coaches",
  }),

  actions: {
    async saveChanges(fileName, data) {
      const reqestData = {
        fileName: fileName,
        data: data,
      };
      console.log(JSON.stringify(reqestData));
      const sendResult = await fetch("/saveChanges", {
        method: "post",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(reqestData),
      });
    },
  },
});
