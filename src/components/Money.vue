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
import { onMounted, reactive, watch } from "vue";
import { model } from "../model";

let tags = reactive(["衣", "食", "住", "行"]);
const record: RecordItem = reactive({
  amount: 0,
  type: "-",
  notes: "",
  tags: [],
});
const recordList = reactive(model.fetch());

const saveRecord = () => {
  const cloneRecord = { ...record };
  cloneRecord.createdAt = new Date();
  recordList.push(cloneRecord);
};
watch(recordList, data => {
  model.save(data);
});
</script>

<style lang="scss" scoped></style>
