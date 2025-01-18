import { User } from "@/entities/user/model/types"
import { Task } from "@/features/dragAndDrop/model/types"

const API_URL = import.meta.env.VITE_API_URL

export const listLoader = async (url: string): Promise<User[]> => {
  try {
    const response = await fetch(url)
    if(!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    const newError = error as Error    
    throw new Error(`Failed to fetch data from ${url}: ${newError.message}`)
  }
}

export const postTask = async (data: Task): Promise<Task> => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),  
    })

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`)
    }
    const result: Task = await response.json()
    return result
  } catch (error) {
    const newError = error as Error   
    throw new Error(`Failed to fetch data from ${API_URL}: ${newError.message}`)   
  }
}
