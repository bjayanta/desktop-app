import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'

// custom routes
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

// pages
import Login from "../auth/Login";
import Register from "../auth/Register";
import Dashboard from "../Dashboard";
import PageNotFound from "../PageNotFound";

import AuthContext from '../../contexts/authContext'

export default class RouterArea extends Component {

    render() {
        return (
            <div>
                <AuthContext.Consumer>
                    {context => (
                    <Routes>
                        {/* public(auth) route */}
                        {/* <Route path="/register" element={ <Register /> } /> */}
                        <Route path="/login" element={ <PublicRoute auth={context.isAuthenticated} /> }>
                            <Route path='/login' element={ <Login /> } />
                        </Route>

                        <Route path="/register" element={ <PublicRoute auth={context.isAuthenticated} /> }>
                            <Route path='/register' element={ <Register /> } />
                        </Route>

                        {/* private route */}
                        <Route path='/' element={ <PrivateRoute auth={context.isAuthenticated} /> }>
                            <Route path='/' element={ <Dashboard/> } />
                        </Route>

                        {/* 404 */}
                        <Route path="*" element={ <PageNotFound /> } />
                    </Routes>
                    )}
                </AuthContext.Consumer>
            </div>
        )
    }

}