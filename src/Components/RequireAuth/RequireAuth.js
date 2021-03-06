
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {

    const [user,loading]=useAuthState(auth)

    const location = useLocation()


    if(loading){
        return <div style={{marginTop:'100px'}}>
            <Spinner animation="grow" />
            <Spinner style={{margin:'0 20px 0 20px '}} animation="grow" />
            <Spinner animation="grow" />
        </div>
    }
    if(!user){
          
        return <Navigate to='/signin' state={{from:location}} replace ></Navigate>

    } 


    return children
};

export default RequireAuth;
