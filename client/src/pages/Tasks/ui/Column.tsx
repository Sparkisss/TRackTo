import { useDroppable } from "@dnd-kit/core"
import { Button } from "antd"
import { TaskCard } from "./TaskCard"
import AddTaskModal from "@/entities/tasks/ui/AddTaskModal/AddTaskModal"
import { useModal } from "../model/hooks/useModal"
import { ColumnProps } from "../model/types/types"
import { ButtonCard } from "./ButtonCard"

export function Column({ column, className, tasks, cardClassName } : ColumnProps ) {
  const { isModalOpen, showModal, handleOk, handleCancel } = useModal()
  const { setNodeRef } = useDroppable({
    id: column.id,
  })

  return (
    <div ref={setNodeRef} className={className}>
      {column.title}
      {column.title !== "Done" 
        ? tasks.map(task => (
          <div key={task._id}>
            <TaskCard key={task._id} className={cardClassName} task={task} />
            <ButtonCard disabled={false} id={task._id}/>
          </div>
          
        ))
        : tasks.map(task => (
          <div key={task._id}>
            <TaskCard key={task._id} className={cardClassName} task={task} />
            <ButtonCard disabled={true} id={task._id}/>
          </div>
        ))}
      <Button onClick={showModal}>Add task...</Button>
      <AddTaskModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}/>
    </div>  
  )
}
