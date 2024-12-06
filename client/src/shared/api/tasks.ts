import { User } from "@/entities/user/model/types"

export const listLoader = async (): Promise<User[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if(!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`)
    }
    const data: User[] = await response.json()
    return data
  } catch (error) {
    console.error("Fetch error:", error)
    throw error
  }
}

interface TaskType {
  title: string;
  completed: boolean;
  status: string
}

export const postTask = async (): Promise<TaskType> => {
  try {
    const response = await fetch("http://localhost:7000/add/task", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({              
        title: "New User",
        completed: false,
        status: "newuser@example.com",
      }),
    })

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data: TaskType = await response.json()
    return data
  } catch (error) {
    console.error("Fetch error:", error)
    throw error
  }
}