import { useState, useMemo, useEffect } from "react"
import { DndContext, DragEndEvent } from "@dnd-kit/core"
import { Task } from "@/features/dragAndDrop/model/types"
import { Column } from "@/features/dragAndDrop/ui/Column"
import { SideBar } from "@/widgets/Sidebar/ui/SideBar"
import module from "./Task.module.scss"
import { useAppDispatch, useAppSelector } from "@/features/auth"
import { RootState } from "@/app/store/store"
import { fetchTasks, updateTask } from "@/entities/tasks/model/slice/taskSlice"
import { COLUMNS } from "@/entities/tasks/model/columnData/columns"
import { Loader } from "@/shared/ui/loader/Loader"

export function Tasks() {
  const {tasks, isLoading, error} = useAppSelector((state: RootState) => state.tasks)
  const dispatch = useAppDispatch()
  const [task, setTasks] = useState<Task[]>(tasks)  

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

  return (
    <div className={module.wrapper}>
      <SideBar />
      <Loader isLoading={isLoading} error={error}/>
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