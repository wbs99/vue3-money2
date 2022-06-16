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
