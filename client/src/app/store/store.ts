import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../../entities/user/model/userSlice"
import tasksReducer from "../../entities/tasks/model/taskSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: tasksReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>