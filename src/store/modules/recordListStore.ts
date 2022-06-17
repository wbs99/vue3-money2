import { defineStore } from "pinia";
import { reactive } from "vue";

export const recordListStore = defineStore("recordList", () => {
  const recordList = reactive([]);

  function fetchRecordList() {
    return (JSON.parse(window.localStorage.getItem("recordList")) ||
      []) as RecordItem[];
  }
  function saveRecordList(data: RecordItem[]) {
    window.localStorage.setItem("recordList", JSON.stringify(data));
  }

  return { recordList, fetchRecordList, saveRecordList };
});
