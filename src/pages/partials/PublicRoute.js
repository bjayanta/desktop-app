import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = (props) => {
    console.log(props.auth);
    
    // determine if authorized, from context or however you're doing it
    const auth = props.auth; 

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;