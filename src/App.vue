<script setup lang="ts"></script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "src/assets/style/helper.scss";
@import "src/assets/style/reset.scss";

#app {
  font-family: $font-hei;
  color: #2c3e50;
  font-size: 16px;
  line-height: 1.5;
  background: #f4f4f4;
}
</style>
