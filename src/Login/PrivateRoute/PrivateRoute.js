import React from 'react'
import { CircularProgress } from '@mui/material';
import {Navigate, useLocation} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


function PrivateRoute({ children }) {
    const {user, isLoading} = useAuth();
    const location = useLocation();

    // console.log(user.email, location.search)
    if(!user.email){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    if(isLoading){
        return <CircularProgress />
    }
    
  return children;
}

export default PrivateRoute