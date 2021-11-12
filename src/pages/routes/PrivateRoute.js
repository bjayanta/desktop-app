import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ ...rest }) => {
    return (
        <Route {...rest} render={ ({props, location}) => {
            sessionStorage.getItem("authToken") ? 
            ( <Dashboard {...props} /> ) : 
            ( <Redirect to={ {pathname: "/login", state: {from: location} } } /> )
        } } />
    );
};

export default PrivateRoute;
