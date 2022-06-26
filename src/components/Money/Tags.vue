<template>
  <div class="tags">
    <div class="new"><button @click="createTag">新增标签</button></div>
    <ul class="current">
      <li
        v-for="(tag, index) in tags"
        :key="index"
        :class="selectedTags.includes(tag) ? 'selected' : ''"
        @click="toggle(tag)"
      >
        {{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import useStore from "@/store/index";
import { computed, reactive } from "vue";
import { useCreateTag } from "../../hooks/useCreateTag";

const { createTagHooks } = useCreateTag();
const { tagListStore } = useStore();
const emit = defineEmits(["update:value"]);

const selectedTags = reactive([]);
const tags = computed(() => tagListStore.tagList);
const toggle = (tag: Tag) => {
  if (selectedTags.includes(tag)) {
    selectedTags.splice(selectedTags.indexOf(tag), 1);
  } else {
    selectedTags.push(tag);
  }
  emit("update:value", [...selectedTags]);
};
const createTag = () => {
  createTagHooks();
};
</script>

<style lang="scss" scoped>
.tags {
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
  background-color: white;
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
