<template>
  <Layout>
    <ol class="tags">
      <router-link
        v-for="tag in tags"
        :key="tag.id"
        class="tag"
        :to="`/labels/edit/${tag.id}`"
      >
        <span>{{ tag.name }}</span> <Icon name="right" />
      </router-link>
    </ol>
    <div class="createTag-wrapper">
      <Button @click="createTag">新增标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts" setup>
import Layout from "./Layout.vue";
import { onMounted, computed } from "vue";
import useStore from "@/store/index";
import Button from "./Button.vue";

const { tagListStore } = useStore();
const tags = computed(() => tagListStore.tagList);
onMounted(() => {
  tagListStore.fetchTagList();
});

const createTag = () => {
  const tagName = window.prompt("请输入标签名");
  if (tagName) {
    tagListStore.createTag(tagName);
  }
};
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      color: #666;
      margin-right: 16px;
      width: 18px;
      height: 18px;
    }
  }
}
.createTag-wrapper {
  text-align: center;
  margin-top: 48px;
}
</style>
