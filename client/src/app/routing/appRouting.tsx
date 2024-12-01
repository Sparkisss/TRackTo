import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../shared/ui/main-layout/index";
import { listLoader } from '../../pages/ListOfUsers/index'
import { AuthObserver } from "../../features/auth";

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
                element: <AuthObserver><PickInfo /></AuthObserver>,                
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
                        path: 'list/tasks',                         
                        element: <Tasks />,                                                                   
                    },
                    {
                        path: 'list/dashboard', 
                        element: <div>dashboard</div>,                                                                   
                    },
                    {
                        path: 'list/setting', 
                        element: <div>setting</div>,                                                                   
                    },
                ]
            }
        ]
    }
]);
