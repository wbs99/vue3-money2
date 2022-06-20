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
  function updateTag(id: string, name: string) {
    const tag = this.tagList.find((item: Tag) => item.id === id);
    if (tag) {
      tag.name = name;
      this.saveTag();
    }
  }
  function deleteTag(id: string) {
    const index = this.tagList.findIndex((item: Tag) => item.id === id);
    if (index !== -1) {
      this.tagList.splice(index, 1);
      this.saveTag();
    }
  }

  return { tagList, fetchTagList, createTag, saveTag, updateTag, deleteTag };
});
