import { TaskType, ColumnType } from "@/features/dragAndDrop/model/types"

export type ColumnProps = {
    className: string;
    cardClassName: string;
    column: ColumnType;
    tasks: TaskType[];
};