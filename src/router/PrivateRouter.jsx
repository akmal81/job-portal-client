import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation()
    console.log(location);

    if(loading){
        return <div><h2>Loading...</h2></div>
    }

    if(user){
        return children;
    }
    return <Navigate to="/signin" state={location?.pathname}></Navigate>
};

export default PrivateRouter;