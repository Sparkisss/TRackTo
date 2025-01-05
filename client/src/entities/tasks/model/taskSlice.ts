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

export const initialState: BoardState = {
  tasks: [],
  isLoading: false,
  error: "",
}

// export const initialState: BoardState = {
//   tasks: [
//     {
//       id: "1",
//       title: "Research Project",
//       description: "Gather requirements and create initial documentation",
//       belong: "TODO",
//       status: false,
//     },
//     {
//       id: "2",
//       title: "Design System",
//       description: "Create component library and design tokens",
//       belong: "TODO",
//       status: false,    
//     },
//     {
//       id: "3",
//       title: "API Integration-Igor",
//       description: "Implement REST API endpoints",
//       belong: "IN_PROGRESS",
//       status: false,
//     },
//     {
//       id: "4",
//       title: "Testing",
//       description: "Write unit tests for core functionality",
//       belong: "DONE",
//       status: false,
//     },
//   ],
//   isLoading: false,
//   error: "",
// }

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((item) => {
        item.title = item.title + action.payload
        console.log(item.title)
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
  },
})

export const { getData } = tasksSlice.actions
export default tasksSlice.reducer