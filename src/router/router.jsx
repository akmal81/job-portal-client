import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Registration from "../pages/Registration/Registration";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails.jsx/JobDetails";
import PrivateRouter from "./PrivateRouter";
import ApplyJob from "../pages/ApplyJob/ApplyJob";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <div><h2>440 Page not Found</h2></div>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/addJob',
                element: <PrivateRouter><AddJob /></PrivateRouter>
            },
            {
                path: '/myPostedJobs',
                element: <PrivateRouter><MyPostedJobs /></PrivateRouter>
            },
            {
                path: '/viewApplications/:job_id',
                element: <PrivateRouter><ViewApplications /></PrivateRouter>,
                loader:({params}) => fetch(`http://localhost:5000/job-application/jobs/${params.job_id}`)

            },
            {
                path: '/jobs/:id',
                element: <PrivateRouter><JobDetails /></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRouter><ApplyJob /> </PrivateRouter>,

            },

            {
                path: '/myApplications',
                element: <PrivateRouter><MyApplications /> </PrivateRouter>

            },
            {
                path: '/registration',
                element: <Registration />
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            }
        ]

    }
])
export default router