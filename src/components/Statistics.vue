<template>
  <Layout>
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
</style>
