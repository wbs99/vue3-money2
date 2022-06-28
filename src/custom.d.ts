type RecordItem = {
  amount: number;
  type: string;
  notes: string;
  tags: string[];
  createdAt?: Date;
};

type TagListModel = {
  data: string[];
  fetch: () => string[];
  create: (data: string) => void;
  save: () => void;
};

type Tag = {
  name: string;
  id: string;
};

type TabItem = {
  text: string;
  value: string;
};
