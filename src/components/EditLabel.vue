<template>
  <Layout>
    <div class="navbar">
      <Icon name="left" class="leftIcon" />
      <span>编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="formWrapper">
      <FormItem :filed-name="state.tag.name" placeholder="在这里修改标签名" />
    </div>
    <div class="buttonWrapper">
      <Button>删除标签</Button>
    </div>
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

<style lang="scss" scoped>
.navbar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > .leftIcon {
    width: 24px;
    height: 24px;
  }
  > .rightIcon {
    width: 24px;
    height: 24px;
  }
}
.formWrapper {
  background-color: white;
  margin-top: 8px;
}
.buttonWrapper {
  text-align: center;
  padding: 16px;
  margin-top: 28px;
}
</style>
