import { useState } from "react"
import { useDroppable } from "@dnd-kit/core"
import { Button } from "antd"
import { ColumnType, TaskType } from "@/features/dragAndDrop/model/types"
import TaskCard from "./TaskCard"
import AddTaskModal from "@/features/tasks/ui/AddTaskModal/AddTaskModal"

type ColumnProps = {
    className: string;
    cardClassName: string;
    column: ColumnType;
    tasks: TaskType[];
};

export function Column({ column, className, tasks, cardClassName } : ColumnProps ) {
        
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    // Здесь можно добавить логику для добавления новой задачи
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

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
      <Button onClick={showModal}>Add task...</Button>
      <AddTaskModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}/>
    </div>  
  )
}
