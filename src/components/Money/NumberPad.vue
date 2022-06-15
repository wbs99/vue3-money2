<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="deleteContent">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clearContent">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="ok" @click="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts" setup name="NumberPad">
import { onMounted, ref } from "vue";

onMounted(() => {
  output.value = props.value.toString();
});

const output = ref("0");

const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
});
const emit = defineEmits(["update:value", "submit"]);

const inputContent = (event: MouseEvent) => {
  const button = event.target as HTMLButtonElement;
  const input = button.textContent!;
  if (output.value.length === 16) {
    return;
  }
  if (output.value === "0") {
    if ("123456789".includes(input)) {
      output.value = input;
    } else {
      output.value += input;
    }
    return;
  }
  if (output.value.includes(".") && input === ".") {
    return;
  }

  output.value += input;
};
const clearContent = () => {
  output.value = "0";
};
const deleteContent = () => {
  if (output.value.length === 1) {
    output.value = "0";
    return;
  }
  output.value = output.value.substring(0, output.value.length - 1);
};
const ok = () => {
  emit("update:value", parseFloat(output.value));
  emit("submit");
  output.value = "0";
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/helper.scss";

.numberPad {
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    height: 72px;
  }
  .buttons {
    @extend %clearFix;
    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;
      &.ok {
        height: 64 * 2px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      $bg: #f2f2f2;
      &:nth-child(1) {
        background: $bg;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: darken($bg, 4%);
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: darken($bg, 4 * 2%);
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: darken($bg, 4 * 3%);
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: darken($bg, 4 * 4%);
      }
      &:nth-child(14) {
        background: darken($bg, 4 * 5%);
      }
      &:nth-child(12) {
        background: darken($bg, 4 * 6%);
      }
    }
  }
}
</style>
