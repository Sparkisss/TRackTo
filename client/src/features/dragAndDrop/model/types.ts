export type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE";

export interface BoardState {
    tasks: Task[];
    isLoading: boolean;
    error: string;
}
export interface Task {
  _id: string;
  belong: TaskStatus;
  title: string;
  description: string;
  status: boolean;
};

export type ColumnType = {
  id: TaskStatus;
  title: string;
};