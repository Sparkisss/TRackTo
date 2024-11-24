import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../shared/ui/main-layout/index";
import { listLoader } from '../../pages/ListOfUsers/index'
import { RequireAuth } from "../../features/auth";

const Statistics = React.lazy(() => import("../../pages/Statistics/index"))
const Tasks = React.lazy(() => import("../../pages/Tasks/index"))
const Equipment = React.lazy(() => import("../../pages/Equipment/index"))
const Control = React.lazy(() => import("../../pages/Control/index"))
const PickInfo = React.lazy(() => import("../../pages/PickInfo/index"))
const Auth = React.lazy(() => import("../../pages/Auth/index"))
const ListOfUsers = React.lazy(() => import("../../pages/ListOfUsers/index"))

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
                        element: <Tasks />,
                    },
                ]
            }
        ]
    }
]);
