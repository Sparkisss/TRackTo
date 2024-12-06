export type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE";

export type TaskType = {
  id: string;
  belong: TaskStatus;
  title: string;
  description: string;
  status: boolean;
};

export type ColumnType = {
  id: TaskStatus;
  title: string;
};