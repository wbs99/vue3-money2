<template>
  <Layout>
    <Tabs classPrefix="type" :dataSource="typeList" v-model:selected="type" />
    <Tabs
      classPrefix="time"
      :dataSource="timeList"
      v-model:selected="timeSelected"
    />
  </Layout>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import Tabs from "./Tabs.vue";

const type = ref("-");
const typeList = reactive([
  { text: "支出", value: "-" },
  { text: "收入", value: "+" },
]);

const timeSelected = ref("day");
const timeList = reactive([
  { text: "按天", value: "day" },
  { text: "按周", value: "week" },
  { text: "按月", value: "month" },
]);
</script>

<style lang="scss" scoped>
::v-deep .type-tabs-item,
.time-tabs-item {
  background: white;
  &.selected {
    background: #c4c4c4;
  }
}
::v-deep .time-tabs-item {
  height: 48px;
}
</style>
