import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { auth } from "../services/authService";

const AuthRoute = ({ children, ...rest }) => {
    const isAuth = auth.isAuthenticated;

    return (<Route { ...rest } render={ () => isAuth ? (<Redirect to={'/'} />) : (children) } />);
};

export default AuthRoute;