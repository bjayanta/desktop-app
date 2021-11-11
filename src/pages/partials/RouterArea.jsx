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

import { auth } from '../../utils/authService'

export default class RouterArea extends Component {

    render() {
        return (
            <div>
                <Routes>
                    {/* public(auth) route */}
                    {/* <Route path="/register" element={ <Register /> } /> */}
                    <Route path="/login" element={ <PublicRoute auth={auth.isAuthenticated} /> }>
                        <Route path='/login' element={ <Login /> } />
                    </Route>

                    <Route path="/register" element={ <PublicRoute auth={auth.isAuthenticated} /> }>
                        <Route path='/register' element={ <Register /> } />
                    </Route>

                    {/* private route */}
                    <Route path='/' element={ <PrivateRoute auth={auth.isAuthenticated} /> }>
                        <Route path='/' element={ <Dashboard/> } />
                    </Route>

                    {/* 404 */}
                    <Route path="*" element={ <PageNotFound /> } />
                </Routes>
            </div>
        )
    }

}