<template>
  <div class="navWrapper">
    <div class="content">
      <slot></slot>
    </div>
    <Nav />
  </div>
</template>

<style lang="scss" scoped>
.navWrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  > .content {
    overflow: auto;
    flex-grow: 1;
  }
}
</style>
