<template>
  <Layout classPerFix="layout">
    <NumberPad />
    <Types />
    <Notes />
    <Tags />
  </Layout>
</template>

<script lang="ts" setup name="Money">
import NumberPad from "./Money/NumberPad.vue";
import Types from "./Money/Types.vue";
import Notes from "./Money/Notes.vue";
import Tags from "./Money/Tags.vue";
</script>

<style lang="scss" scoped></style>
