import { useState, useMemo, useEffect } from "react"
import { DndContext, DragEndEvent } from "@dnd-kit/core"
import { ColumnType, TaskType } from "@/features/dragAndDrop/model/types"
import { listLoader } from "@/shared/api/tasks"
import { Column } from "./Column"
import { SideBar } from "./SideBar"
import module from "./Task.module.scss"

const COLUMNS: ColumnType[] = [
  { id: "TODO", title: "To Do" },
  { id: "IN_PROGRESS", title: "In Progress" },
  { id: "DONE", title: "Done" },
]

const INITIAL_TASKS: TaskType[] = [
  {
    id: "1",
    title: "Research Project",
    description: "Gather requirements and create initial documentation",
    belong: "TODO",
    status: false,
  },
  {
    id: "2",
    title: "Design System",
    description: "Create component library and design tokens",
    belong: "TODO",
    status: false,    
  },
  {
    id: "3",
    title: "API Integration",
    description: "Implement REST API endpoints",
    belong: "IN_PROGRESS",
    status: false,
  },
  {
    id: "4",
    title: "Testing",
    description: "Write unit tests for core functionality",
    belong: "DONE",
    status: false,
  },
]

export function Tasks() {
  const [tasks, setTasks] = useState<TaskType[]>(INITIAL_TASKS)

  useEffect(() => {
    listLoader("http://localhost:7000/tasks")
  },[tasks])

  const tasksByColumn = useMemo(() => {
    return COLUMNS.reduce((acc, column) => {
      acc[column.id] = tasks.filter(task => task.belong === column.id)      
      return acc
    }, {} as Record<string, TaskType[]>)
  }, [tasks])

  function handleDrag(event: DragEndEvent) {
    const { active, over } = event

    if (!over) return

    const taskId = active.id as string
    const newStatus = over.id as TaskType["belong"]

    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, belong: newStatus } : task,
      ),
    )
  }

  return (
    <div className={module.wrapper}>
      <SideBar />
      <DndContext onDragEnd={handleDrag}>
        {COLUMNS.map((column) => (
          <Column
            className={module.board}
            cardClassName={module.card}
            key={column.id}
            column={column}
            tasks={tasksByColumn[column.id]}
          />
        ))}
      </DndContext>
    </div>
  )
}