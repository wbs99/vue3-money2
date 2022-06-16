import { defineStore } from "pinia";

export const tagListStore = defineStore("tagList", {
  state: () => {
    return {
      tagList: [],
    };
  },
  getters: {},
  actions: {
    fetchTagList() {
      this.tagList = JSON.parse(window.localStorage.getItem("tagList")) || [];
    },
    createTag(name: string) {
      this.tagList.push(name);
      this.saveTag();
    },
    saveTag() {
      window.localStorage.setItem("tagList", JSON.stringify(this.tagList));
    },
  },
});
