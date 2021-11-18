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
// manage users
import UserList from '../pages/manage/user/List'
import UserForm from '../pages/manage/user/Form'
import UserDetails from '../pages/manage/user/Details'

export default class RouterArea extends Component {

    render() {
        return (
            <div>
                <Switch>
                    {/* private route */}
                    <PrivateRoute exact path="/"><Dashboard /></PrivateRoute>

                    {/* manage user */}
                    <PrivateRoute exact path="/user/list"><UserList /></PrivateRoute>
                    <PrivateRoute exact path="/user/create"><UserForm /></PrivateRoute>
                    <PrivateRoute exact path="/user/show/:id"><UserDetails /></PrivateRoute>
                    <PrivateRoute exact path="/user/edit/:id"><UserForm /></PrivateRoute>
                    {/* manage user end */}

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