import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { auth } from "../../utils/authService";

const PrivateRoute = ({ children, ...rest }) => {
    const isAuth = auth.isAuthenticated;

    return (<Route { ...rest } render={ () => isAuth ? (children) : (<Redirect to={'/login'} />) } />);
};

export default PrivateRoute;
