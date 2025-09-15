import { createBrowserRouter } from "react-router";
import Outline from "../Outline/Outline";
import Errorpage from "../pages/Errorpage/Errorpage";
import Home from "../pages/Home";

const Routes = createBrowserRouter([
    {
        path: '/',
        errorElement: <Errorpage></Errorpage>,
        element: <Outline></Outline>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    }
])

export default Routes