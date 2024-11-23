import { RouterProvider } from "react-router-dom";
import { router } from "./routing/index";
import { Suspense } from "react";

export const App = () => {
    return (
        <Suspense fallback={<h2>Loading...</h2>}>            
            <RouterProvider router={router}/>
        </Suspense>
    )
};

