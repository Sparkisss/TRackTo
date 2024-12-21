import { User } from "@/entities/user/model/types"
import { TaskType } from "@/features/dragAndDrop/model/types"

export const listLoader = async (url: string): Promise<User[]> => {
  try {
    const response = await fetch(url)
    if(!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Fetch error:", error)
    throw error
  }
}

export const postTask = async (data: TaskType): Promise<TaskType> => {
  try {
    const response = await fetch("http://localhost:7000/add/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),  
    })

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`)
    }

    const result: TaskType = await response.json()
    return result
  } catch (error) {
    console.error("Fetch error:", error)
    throw error
  }
}
