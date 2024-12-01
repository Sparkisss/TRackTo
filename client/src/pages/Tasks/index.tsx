import { useState, useMemo } from "react";
import { ColumnType, TaskType } from "../../features/dragAndDrop/model/types";
import Column from "./ui/Column";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import SideBar from "./ui/SideBar";
import module from './Task.module.scss';

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
  const [tasks, setTasks] = useState<TaskType[]>(INITIAL_TASKS);

  const tasksByColumn = useMemo(() => {
    return COLUMNS.reduce((acc, column) => {
      acc[column.id] = tasks.filter(task => task.status === column.id);
      return acc;
    }, {} as Record<string, TaskType[]>);
  }, [tasks]);

  function handleDrag(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as TaskType['status'];

    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }

  const listLoader = async (): Promise<any> => {
    try {
      const response = await fetch('http://localhost:7000/add/task', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({              
          title: "New User",
          completed: false,
          status: "newuser@example.com"
        })
      });
  
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
  
      const data: any = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
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
  );
};

export default Task;
