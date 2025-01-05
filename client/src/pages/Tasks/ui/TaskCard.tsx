import { useDraggable } from "@dnd-kit/core"
import { Flex, Tooltip, Button } from "antd"
import { CheckOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons"
import { Task } from "@/features/dragAndDrop/model/types"

type TaskCardProps = {
    task: Task;
    className: string;
    disabled: boolean;
};

export function TaskCard({ task, className, disabled }: TaskCardProps) {
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
      <Flex wrap gap="small">
        <Tooltip title="complet">
          <Button type="primary" shape="circle" icon={<CheckOutlined />} disabled={disabled} />
        </Tooltip>
        <Tooltip title="edit">
          <Button type="primary" shape="circle" icon={<EditOutlined />} />
        </Tooltip>
        <Tooltip title="delete">
          <Button type="primary" shape="circle" icon={<DeleteOutlined />} />
        </Tooltip>
      </Flex>
    </div>
  )
}
