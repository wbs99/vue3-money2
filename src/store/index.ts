import { tagListStore } from "./modules/tagListStore";
import { recordListStore } from "./modules/recordListStore";

export default function useStore() {
  return {
    tagListStore: tagListStore(),
    recordListStore: recordListStore(),
  };
}
