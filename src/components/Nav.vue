<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money" />
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label" /> 标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics" />统计
    </router-link>
  </nav>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";
nav {
  display: flex;
  @extend %outerShadow;
  font-size: 12px;
  > .item {
    padding: 2px 0;
    width: 33.3333333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &.selected {
      color: #ff7517;
    }
    > .icon {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
