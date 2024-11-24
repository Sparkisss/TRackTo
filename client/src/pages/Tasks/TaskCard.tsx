import { FC } from "react";
import { TaskType } from "../../features/dragAndDrop/model/types";
import { useDraggable } from "@dnd-kit/core";

type TaskCardProps = {
    task: TaskType;
    className: string;
}

const TaskCard: FC<TaskCardProps> = ({task, className}) => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: task.id
    })

    const style = transform
        ? {
            transform: `translate(${transform.x}px, ${transform.y}px)`
          }
        : undefined
        
    return (
        <div ref={setNodeRef} {...listeners} {...attributes} className={className} style={style}>
            {task.title} {task.description}
        </div>
    );
};

export default TaskCard;