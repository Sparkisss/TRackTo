import { FC } from "react"
import { useDroppable } from "@dnd-kit/core"
import { Button } from "antd"
import { ColumnType, TaskType } from "@/features/dragAndDrop/model/types"
import TaskCard from "./TaskCard"

type ColumnProps = {
    className: string;
    cardClassName: string;
    column: ColumnType;
    tasks: TaskType[];
};

const Column: FC<ColumnProps> = ({ column, className, tasks, cardClassName }) => {
        
  const { setNodeRef } = useDroppable({
    id: column.id,
  })

  return (
    <div ref={setNodeRef} className={className}>
      {column.title}
      {column.title !== "Done" 
        ? tasks.map(task => (
          <TaskCard key={task.id} className={cardClassName} task={task} disabled={false}/>
        ))
        : tasks.map(task => (
          <TaskCard key={task.id} className={cardClassName} task={task} disabled={true}/>
        ))}
      <Button>Add task...</Button>
    </div>  
  )
}

export default Column
