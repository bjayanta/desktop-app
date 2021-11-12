import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// custom routes
import AuthRoute from '../routes/AuthRoute'
import PrivateRoute from '../routes/PrivateRoute'

// pages
import Login from "../auth/Login";
import Register from "../auth/Register";
import Dashboard from "../Dashboard";
import PageNotFound from "../PageNotFound";

export default class RouterArea extends Component {

    render() {
        return (
            <div>
                <Switch>
                    {/* private route */}
                    <PrivateRoute exact path="/"><Dashboard /></PrivateRoute>

                    {/* Auth route */}
                    <AuthRoute exact path="/login"><Login /></AuthRoute>
                    <AuthRoute exact path="/register"><Register /></AuthRoute>

                    {/* 404 */}
                    <Route component={ PageNotFound } />
                </Switch>
            </div>
        )
    }

}