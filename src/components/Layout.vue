<template>
  <div class="layoutWrapper">
    <div
      class="content"
      :class="props.classPerFix && `${props.classPerFix}-content`"
    >
      <slot></slot>
    </div>
    <Nav />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  classPerFix: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.layoutWrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .content {
    overflow: auto;
    flex-grow: 1;
  }
  > .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
