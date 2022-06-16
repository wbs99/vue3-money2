import { defineStore } from "pinia";

export const recordListStore = defineStore("recordListStore", {
  state: () => {
    return {
      tagList: [],
    };
  },
  getters: {},
  actions: {
    fetchRecordList() {
      return (JSON.parse(window.localStorage.getItem("recordList")) ||
        []) as RecordItem[];
    },

    saveRecordList(data: RecordItem[]) {
      window.localStorage.setItem("recordList", JSON.stringify(data));
    },
  },
});
