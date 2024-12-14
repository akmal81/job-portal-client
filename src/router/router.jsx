import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Registration from "../pages/Registration/Registration";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/Home/JobDetails.jsx/JobDetails";
import PrivateRouter from "./PrivateRouter";

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
                path:'/jobs/:id',
                element:<PrivateRouter><JobDetails></JobDetails></PrivateRouter> ,
                loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
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