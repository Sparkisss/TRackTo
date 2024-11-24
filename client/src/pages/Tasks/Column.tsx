import { FC } from "react";
import { ColumnType, TaskType } from "../../features/dragAndDrop/model/types";
import TaskCard from "./TaskCard";
import { useDroppable } from "@dnd-kit/core";

type ColumnProps = {
    className: string;
    cardClassName: string;
    column: ColumnType;
    tasks: TaskType[];
};

const Column: FC<ColumnProps> = ({column, className, tasks, cardClassName}) => {
        
    const { setNodeRef } = useDroppable({
        id: column.id
    })
    return (
        <div ref={setNodeRef} className={className}>
            {column.title}
            {tasks.map(task => {
                return <TaskCard key={task.id} className={cardClassName} task={task}/>
            })}
        </div>
    );
};

export default Column;