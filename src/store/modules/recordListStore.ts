import { defineStore } from "pinia";
import { reactive } from "vue";

export const recordListStore = defineStore("recordList", () => {
  const recordList = reactive<RecordItem[]>([]);

  function fetchRecordList() {
    this.recordList = (JSON.parse(window.localStorage.getItem("recordList")) ||
      []) as RecordItem[];
  }

  function createRecord(record: RecordItem) {
    const cloneRecord = JSON.parse(JSON.stringify(record));
    cloneRecord.createdAt = new Date().toISOString();
    this.recordList.push(cloneRecord);
    this.saveRecordList();
  }

  function saveRecordList() {
    window.localStorage.setItem("recordList", JSON.stringify(this.recordList));
  }

  return { recordList, fetchRecordList, saveRecordList, createRecord };
});
