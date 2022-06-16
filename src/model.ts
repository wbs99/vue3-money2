const localStorageKeyName = "recordList";

const model = {
  fetch() {
    return (JSON.parse(window.localStorage.getItem(localStorageKeyName)) ||
      []) as RecordItem[];
  },
  save(data: RecordItem[]) {
    return window.localStorage.setItem(
      localStorageKeyName,
      JSON.stringify(data)
    );
  },
};

export { model };
