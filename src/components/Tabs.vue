<template>
  <div>
    <ul class="tabs">
      <li
        class="tabs-item"
        :class="{
          selected: item.value === props.selected,
          [classPrefix + '-tabs-item']: classPrefix,
        }"
        v-for="item in dataSource"
        :key="item.value"
        @click="select(item)"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Types">
import { PropType } from "vue";

const props = defineProps({
  dataSource: {
    type: Array as PropType<TabItem[]>,
    default: () => [],
  },
  selected: {
    type: String,
  },
  classPrefix: {
    type: String,
  },
});
const emit = defineEmits(["update:selected"]);

const select = (item: TabItem) => {
  emit("update:selected", item.value);
};
</script>

<style lang="scss" scoped>
.tabs {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  &-item {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #333;
    }
  }
}
</style>
