import { useDraggable } from "@dnd-kit/core"
import { Task } from "@/features/dragAndDrop/model/types"

type TaskCardProps = {
    task: Task;
    className: string;    
};

export function TaskCard({ task, className }: TaskCardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task._id || "default-id",
  })

  const style = transform
    ? {
      transform: `translate(${transform.x}px, ${transform.y}px)`,
    }
    : undefined

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} className={className} style={style}>
      {task.title} {task.description}
    </div>
  )
}
