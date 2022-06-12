<template>
  <Layout classPerFix="layout">
    <NumberPad />
    <Types />
    <Notes />
    <Tags :dataSource="tags" />
  </Layout>
</template>

<script lang="ts" setup name="Money">
import NumberPad from "./Money/NumberPad.vue";
import Types from "./Money/Types.vue";
import Notes from "./Money/Notes.vue";
import Tags from "./Money/Tags.vue";
import { reactive } from "vue";

const tags = reactive(["衣", "食", "住", "行"]);
</script>

<style lang="scss" scoped></style>
