import { defineStore } from "pinia";
import { reactive } from "vue";

export const tagListStore = defineStore("tagList", () => {
  const tagList = reactive([]);

  function fetchTagList() {
    this.tagList = JSON.parse(window.localStorage.getItem("tagList")) || [];
  }
  function createTag(name: string) {
    const names = this.tagList.map((item: Tag) => item.name);

    if (names.indexOf(name) === -1) {
      this.tagList.push({ id: name, name: name });
      this.saveTag();
      window.alert("添加成功~");
    } else {
      window.alert("标签名重复了");
    }
  }
  function saveTag() {
    window.localStorage.setItem("tagList", JSON.stringify(this.tagList));
  }

  return { tagList, fetchTagList, createTag, saveTag };
});
