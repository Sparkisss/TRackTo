import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { BoardState, Task } from "@/features/dragAndDrop/model/types"

export const fetchTasks = createAsyncThunk<Task[], string>(
  "tasks/fetchTasks",
  async (url: string, { rejectWithValue }) => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`)
      }
      const data = await response.json()
      return data
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }     
      return rejectWithValue("An unknown error occurred")
    }
  },
)

export const fetchTasksById = createAsyncThunk<Task[], string>(
  "tasks/fetchTasksById",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:7000/tasks/${id}`)
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`)
      }
      const data = await response.json()
      return data
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }     
      return rejectWithValue("An unknown error occurred")
    }
  },
)

export const updateTask = createAsyncThunk<Task, { id: string, task: Partial<Task> }>(
  "tasks/updateTask",
  async ({ id, task }, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:7000/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      })
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`)
      }
      const data = await response.json()
      return data
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue("An unknown error occurred")
    }
  },
)

export const deleteTask = createAsyncThunk<string, string>(
  "tasks/deleteTask",
  async (id, {rejectWithValue}) => {
    try {
      const response = await fetch(`http://localhost:7000/tasks/${id}`, {
        method: "DELETE",
      })
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`)
      }
      return id
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue("An unknown error occurred")
    }    
  },
)

export const initialState: BoardState = {
  tasks: [],
  isLoading: false,
  error: "",
}

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((item) => {
        item.title = item.title + action.payload
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.isLoading = true
        state.error = ""
      })
      .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.isLoading = false
        state.tasks = action.payload
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(updateTask.pending, (state) => {
        state.isLoading = true
        state.error = ""
      })
      .addCase(updateTask.fulfilled, (state, action: PayloadAction<Task>) => {
        state.isLoading = false
        const index = state.tasks.findIndex(task => task._id === action.payload._id)
        if (index !== -1) {
          state.tasks[index] = action.payload
        }
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export const { getData } = tasksSlice.actions
export default tasksSlice.reducer
