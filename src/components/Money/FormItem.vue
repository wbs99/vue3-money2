<template>
  <div>
    <label class="formItem">
      <span class="name">{{ props.filedName }}</span>
      <input type="text" :placeholder="props.placeholder" v-model="value" />
    </label>
  </div>
</template>

<script lang="ts" setup name="Notes">
import { onMounted, ref, watch } from "vue";

const props = defineProps({
  value: {
    type: String,
    default: "",
  },
  filedName: {
    type: String,
    default: "备注",
  },
  placeholder: {
    type: String,
    default: "在这里输入备注",
  },
});
const emit = defineEmits(["update:value"]);

const value = ref("");
onMounted(() => {
  value.value = props.value;
});

watch(value, newValue => {
  emit("update:value", newValue);
});
</script>

<style lang="scss" scoped>
.formItem {
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  > .name {
    padding-right: 16px;
  }
  input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>
