import { useState } from "react";
import { ColumnType, TaskType } from "../../features/dragAndDrop/model/types";
import module from './Task.module.scss';
import Column from "./Column";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

const COLUMNS: ColumnType[] = [
  { id: 'TODO', title: 'To Do' },
  { id: 'IN_PROGRESS', title: 'In Progress' },
  { id: 'DONE', title: 'Done' },
];

const INITIAL_TASKS: TaskType[] = [
  {
    id: '1',
    title: 'Research Project',
    description: 'Gather requirements and create initial documentation',
    status: 'TODO',
  },
  {
    id: '2',
    title: 'Design System',
    description: 'Create component library and design tokens',
    status: 'TODO',
  },
  {
    id: '3',
    title: 'API Integration',
    description: 'Implement REST API endpoints',
    status: 'IN_PROGRESS',
  },
  {
    id: '4',
    title: 'Testing',
    description: 'Write unit tests for core functionality',
    status: 'DONE',
  },
];

const Task = () => {
    
    const [tasks, setTasks] = useState<TaskType[]>(INITIAL_TASKS)

    function handleDrag (event: DragEndEvent) {
      const {active, over} = event
    
      if (!over) return
    
      const taskId = active.id as string
      const newStatus = over.id as TaskType['status']

      setTasks(() => 
        tasks.map((task) => 
          task.id === taskId ? {
            ...task,
            status: newStatus,
          } : task
        )
      )
    }
  
    return (
        <div className={module.wrapper}>
          <DndContext onDragEnd={handleDrag}>
            {COLUMNS.map((column) => {
                return <Column 
                  className={module.board}
                  cardClassName={module.card}
                  key={column.id} 
                  column={column} 
                  tasks={tasks.filter((task) => task.status === column.id)}                
                />
            })}   
          </DndContext>
        </div>
    );
}

export default Task;
