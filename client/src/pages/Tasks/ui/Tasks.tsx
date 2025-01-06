import { useState, useMemo, useEffect } from "react"
import { DndContext, DragEndEvent } from "@dnd-kit/core"
import { ColumnType, Task } from "@/features/dragAndDrop/model/types"
import { Column } from "./Column"
import { SideBar } from "./SideBar"
import module from "./Task.module.scss"
import { useAppDispatch, useAppSelector } from "@/features/auth"
import { RootState } from "@/app/store/store"
import { fetchTasks, updateTask } from "@/entities/tasks/model/taskSlice"

const COLUMNS: ColumnType[] = [
  { id: "TODO", title: "To Do" },
  { id: "IN_PROGRESS", title: "In Progress" },
  { id: "DONE", title: "Done" },
]

export function Tasks() {
  const {tasks, isLoading, error} = useAppSelector((state: RootState) => state.tasks)
  const [task, setTasks] = useState<Task[]>(tasks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTasks("http://localhost:7000/tasks"))    
  }, [dispatch])

  useEffect(() => { 
    setTasks(tasks)
  }, [tasks])

  const tasksByColumn = useMemo(() => {
    return COLUMNS.reduce((acc, column) => {
      acc[column.id] = task.filter(t => t.belong === column.id)      
      return acc
    }, {} as Record<string, Task[]>)
  }, [task])

  function handleDrag(event: DragEndEvent) {
    const { active, over } = event

    if (!over) return

    const taskId = active.id as string
    const newStatus = over.id as Task["belong"]

    setTasks(prevTasks =>
      prevTasks.map(task =>
        task._id === taskId ? { ...task, belong: newStatus } : task,
      ),
    )

    dispatch(updateTask({ id: taskId, task: { belong: newStatus } }))
  }

  if (isLoading) return <div>Loading...</div> 
  if (error) return <div>Error: {error}</div>

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