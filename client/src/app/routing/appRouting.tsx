import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../shared/ui/main-layout/index";
import  Auth  from "../../pages/Auth/index";
import ListOfUsers, { listLoader } from '../../pages/ListOfUsers/index'
import { PickInfo } from "../../pages/PickInfo/index";
import { Control } from "../../pages/Control/index";
import { Equipment } from "../../pages/Equipment/index";
import { Statistics } from "../../pages/Statistics/index";
import { Task } from "../../pages/Tasks/index";
import { RequireAuth } from "../../features/auth";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Auth />
            },            
            {
                path: 'list',
                element: <ListOfUsers />,
                loader: listLoader,
            },
            {
                path: 'list/:id',
                element: <RequireAuth><PickInfo /></RequireAuth>,                
                children: [
                    {
                        path: 'control',  
                        element: <Control />
                    },
                    {
                        path: 'equipment',
                        element: <Equipment />
                    },
                    {
                        path: 'statistics',
                        element: <Statistics />
                    },
                    {
                        path: 'task', 
                        element: <Task />
                    },
                ]
            }
        ]
    }
]);
