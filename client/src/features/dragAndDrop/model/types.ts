export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

export type TaskType = {
  id: string;
  status: TaskStatus;
  title: string;
  description: string;
};

export type ColumnType = {
  id: TaskStatus;
  title: string;
};