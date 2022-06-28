<template>
  <Layout classPerFix="layout">
    <NumberPad v-model:value="record.amount" @submit="saveRecord" />
    <Tabs
      classPrefix="type"
      :dataSource="typeList"
      v-model:selected="record.type"
    />
    <div class="notes">
      <FormItem v-model:value="record.notes" />
    </div>

    <Tags v-model:value="record.tags" />
  </Layout>
</template>

<script lang="ts" setup name="Money">
import NumberPad from "./Money/NumberPad.vue";
import FormItem from "./Money/FormItem.vue";
import Tags from "./Money/Tags.vue";
import { onMounted, reactive } from "vue";
import useStore from "@/store/index";
import Tabs from "./Tabs.vue";

const { tagListStore, recordListStore } = useStore();

const typeList = reactive([
  { text: "支出", value: "-" },
  { text: "收入", value: "+" },
]);
const record: RecordItem = reactive({
  amount: 0,
  type: "-",
  notes: "",
  tags: [],
});

const saveRecord = () => {
  recordListStore.createRecord(record);
};
onMounted(() => {
  recordListStore.fetchRecordList();
  tagListStore.fetchTagList();
});
</script>

<style lang="scss" scoped>
.notes {
  padding: 12px 0;
}
</style>
