<template>
  <Layout classPerFix="layout">
    {{ recordList }}
    <NumberPad v-model:value="record.amount" @submit="saveRecord" />
    <Types v-model:value="record.type" />
    <Notes v-model:value="record.notes" />
    <Tags v-model:dataSource="tags" v-model:value="record.tags" />
  </Layout>
</template>

<script lang="ts" setup name="Money">
import NumberPad from "./Money/NumberPad.vue";
import Types from "./Money/Types.vue";
import Notes from "./Money/Notes.vue";
import Tags from "./Money/Tags.vue";
import { reactive, watch } from "vue";

type Record = {
  amount: number;
  type: string;
  notes: string;
  tags: string[];
  createdAt?: Date;
};

let tags = reactive(["衣", "食", "住", "行"]);
const record: Record = reactive({
  amount: 0,
  type: "-",
  notes: "",
  tags: [],
});
const recordList: Record[] = reactive(
  JSON.parse(window.localStorage.getItem("recordList")) || []
);

const saveRecord = () => {
  const cloneRecord = { ...record };
  cloneRecord.createdAt = new Date();
  recordList.push(cloneRecord);
};
watch(recordList, newValue => {
  window.localStorage.setItem("recordList", JSON.stringify(newValue));
});
</script>

<style lang="scss" scoped></style>
