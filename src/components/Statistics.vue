<template>
  <Layout>
    <Tabs classPrefix="type" :dataSource="typeList" v-model:selected="type" />
    <Tabs
      classPrefix="time"
      :dataSource="timeList"
      v-model:selected="timeSelected"
    />

    <div>
      <ol>
        <li v-for="(group, index) in result" :key="index">
          <h3 class="title">{{ group.title }}</h3>
          <ol>
            <li v-for="item in group.items" :key="item.id" class="record">
              <span>{{ tagString(item.tags) }}</span>
              <!-- <span>{{ item.tags }}</span> -->
              <span class="notes">{{ item.notes }}</span>
              ￥{{ item.amount }}
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </Layout>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive, ref } from "vue";
import Tabs from "./Tabs.vue";
import useStore from "@/store/index";
import TagsVue from "./Money/Tags.vue";
const { recordListStore } = useStore();

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
//const tagNameArray = reactive([]);
const recordList = computed(() => {
  return recordListStore.recordList;
});
const result = computed(() => {
  const x = recordListStore.recordList;
  const hashTable: { [key: string]: HashTableValue } = {};
  x.map(item => {
    const [date] = item.createdAt.toString().split("T");
    hashTable[date] = hashTable[date] || { title: date, items: [] };
    hashTable[date].items.push(item);
  });

  return hashTable;
});
const tagString = (tags: Tag[]) => {
  if (tags.length === 0) {
    return "无";
  } else {
    const tagNameArray = [];
    tags.map(item => {
      tagNameArray.push(item.name);
    });

    return tagNameArray.join(",");
  }
};

onMounted(() => {
  recordListStore.fetchRecordList();
});
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
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
}
.title {
  @extend %item;
}
.record {
  background: white;
  @extend %item;
}
.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}
</style>
