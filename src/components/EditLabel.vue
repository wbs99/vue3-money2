<template>
  <Layout> 编辑标签{{ tag.name }}</Layout>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import useStore from "@/store/index";

const route = useRoute();
const router = useRouter();
const { tagListStore } = useStore();

let tag = reactive({
  name: "",
  id: "",
});

onMounted(() => {
  const id = route.params.id;
  tagListStore.tagList.find(item => {
    if (item.id === id) {
      tag = item;
      console.log(tag);
    }
  });
  tag.name === "" && router.push("/404");
});
</script>
