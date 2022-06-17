import { defineStore } from "pinia";
import { reactive } from "vue";

export const tagListStore = defineStore("tagList", () => {
  const tagList = reactive([]);

  function fetchTagList() {
    this.tagList = JSON.parse(window.localStorage.getItem("tagList")) || [];
  }
  function createTag(name: string) {
    this.tagList.push(name);
    this.saveTag();
  }
  function saveTag() {
    window.localStorage.setItem("tagList", JSON.stringify(this.tagList));
  }

  return { tagList, fetchTagList, createTag, saveTag };
});
