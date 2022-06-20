<template>
  <Layout classPerFix="layout">
    <NumberPad v-model:value="record.amount" @submit="saveRecord" />
    <Types v-model:value="record.type" />
    <div class="notes">
      <FormItem v-model:value="record.notes" />
    </div>
    <Tags v-model:dataSource="tags" v-model:value="record.tags" />
  </Layout>
</template>

<script lang="ts" setup name="Money">
import NumberPad from "./Money/NumberPad.vue";
import Types from "./Money/Types.vue";
import FormItem from "./Money/FormItem.vue";
import Tags from "./Money/Tags.vue";
import { computed, onMounted, reactive, watch } from "vue";
import useStore from "@/store/index";

const { tagListStore, recordListStore } = useStore();
const tags = computed(() => tagListStore.tagList);
const record: RecordItem = reactive({
  amount: 0,
  type: "-",
  notes: "",
  tags: [],
});
const recordList = reactive(recordListStore.fetchRecordList());

const saveRecord = () => {
  const cloneRecord = { ...record };
  cloneRecord.createdAt = new Date();
  recordList.push(cloneRecord);
};
onMounted(() => {
  tagListStore.fetchTagList();
});
watch(recordList, data => {
  recordListStore.saveRecordList(data);
});
</script>

<style lang="scss" scoped>
.notes {
  padding: 12px 0;
}
</style>
