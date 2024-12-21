import { createBrowserRouter } from "react-router-dom"
import { MainLayout } from "@/shared/ui/main-layout/index"
import { listLoader } from "@/shared/api/tasks"
import { AuthObserver } from "@/features/auth"
import { Statistics, Tasks, Equipment, Control, PickInfo, Auth, ListOfUsers } from "@/shared/lazyImports"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Auth />,
      },            
      {
        path: "list",
        element: <ListOfUsers />,
        loader:() => listLoader("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "list/:id",
        element: <AuthObserver><PickInfo /></AuthObserver>,                
        children: [
          {
            path: "control",  
            element: <Control />,
          },
          {
            path: "equipment",
            element: <Equipment />,
          },
          {
            path: "statistics",
            element: <Statistics />,
          },
          {
            path: "list/tasks",                         
            element: <Tasks />,                                                                   
          },
          {
            path: "list/dashboard", 
            element: <div>dashboard</div>,                                                                   
          },
          {
            path: "list/setting", 
            element: <div>setting</div>,                                                                   
          },
        ],
      },
    ],
  },
])
