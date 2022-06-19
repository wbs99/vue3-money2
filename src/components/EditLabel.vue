<template>
  <Layout>
    <div>
      <Icon name="left" />
      <span>编辑标签</span>
    </div>
    <FormItem :filed-name="state.tag.name" placeholder="在这里修改标签名" />
    <Button>删除标签</Button>
  </Layout>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import useStore from "@/store/index";
import FormItem from "./Money/FormItem.vue";
import BUtton from "./Button.vue";
import Button from "./Button.vue";

const route = useRoute();
const router = useRouter();
const { tagListStore } = useStore();

const tagsList = computed(() => tagListStore.tagList);
const state = reactive({
  tag: {
    name: "",
    id: "",
  },
});

onMounted(() => {
  const id = route.params.id;

  tagsList.value.find(item => {
    if (item.id === id) {
      state.tag = item;
    }
  });
  state.tag.name === "" && router.push("/404");
});
</script>
