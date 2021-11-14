import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// custom routes
import AuthRoute from './AuthRoute'
import PrivateRoute from './PrivateRoute'

// pages
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/Dashboard";
import PageNotFound from "../pages/PageNotFound";

export default class RouterArea extends Component {

    render() {
        return (
            <div>
                <Switch>
                    {/* private route */}
                    <PrivateRoute exact path="/">
                        <Dashboard />
                    </PrivateRoute>

                    {/* Auth route */}
                    <AuthRoute exact path="/login">
                        <Login />
                    </AuthRoute>

                    <AuthRoute exact path="/register">
                        <Register />
                    </AuthRoute>

                    {/* 404 */}
                    <Route component={ PageNotFound } />
                </Switch>
            </div>
        )
    }

}