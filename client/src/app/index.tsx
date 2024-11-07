import { RouterProvider } from "react-router-dom";
import { router } from "./routing/index";

export const App = () => {
    return <RouterProvider router={router}/>
};

