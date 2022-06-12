<template>
  <div class="tags">
    <div class="new"><button>新增标签</button></div>
    <ul class="current">
      <li
        v-for="(tag, index) in props.dataSource"
        :key="index"
        :class="selectedTags.includes(tag as string) ? 'selected' : ''"
        @click="toggle(tag as string)"
      >
        {{ tag }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const props = defineProps({
  dataSource: {
    type: Array,
  },
});

const selectedTags = reactive([]);
const toggle = (tag: string) => {
  const index = selectedTags.indexOf(tag);
  if (index >= 0) {
    selectedTags.splice(index, 1);
  } else {
    selectedTags.push(tag);
  }
};
</script>

<style lang="scss" scoped>
.tags {
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: calc($h / 2);
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
      &.selected {
        background: #ff7517;
      }
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>
