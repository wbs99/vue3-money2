import useStore from "@/store/index";
const { tagListStore } = useStore();

export function useCreateTag() {
  const createTagHooks = (): void => {
    const tagName = window.prompt("请输入标签名称");
    if (tagName === "") {
      window.alert("标签名称不能为空");
    } else {
      tagListStore.createTag(tagName);
    }
  };

  return { createTagHooks };
}
