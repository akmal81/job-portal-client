import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "../pages/Home/Home";
import Registration from "../pages/Registration/Registration";
import SignIn from "../pages/SignIn/SignIn";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        errorElement: <div><h2>440 Page not Found</h2></div>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/registration',
                element:<Registration/>
            },
            {
                path:'/signin',
                element: <SignIn></SignIn>
            }
        ]

    }
])
export default router