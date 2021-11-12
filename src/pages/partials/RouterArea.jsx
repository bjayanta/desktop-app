import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { auth } from '../../utils/authService'

// custom routes
// import PublicRoute from './PublicRoute'
// import PrivateRoute from './PrivateRoute'

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
                    {/* public(auth) route */}
                    <Route exact path="/" component={ Dashboard } />

                    {/* Auth route */}
                    {/* <Route exact path="/login" component={ Login } /> */}
                    <Route exact path="/login">
                        { auth.isAuthenticated ? <Redirect to='/' /> : <Login /> }
                    </Route>

                    {/* <Route exact path="/register" component={ Register } /> */}
                    <Route exact path="/register">
                        { auth.isAuthenticated ? <Redirect to='/' /> : <Register /> }
                    </Route>

                    {/* 404 */}
                    <Route component={ PageNotFound } />

                    {/* <Route path="/login" element={ <PublicRoute auth={auth.isAuthenticated} /> }>
                        <Route path='/login' element={ <Login /> } />
                    </Route> */}

                    {/* <Route path="/register" element={ <PublicRoute auth={auth.isAuthenticated} /> }>
                        <Route path='/register' element={ <Register /> } />
                    </Route> */}

                    {/* private route */}
                    {/* <Route path='/' element={ <PrivateRoute auth={auth.isAuthenticated} /> }>
                        <Route path='/' element={ <Dashboard/> } />
                    </Route> */}
                </Switch>
            </div>
        )
    }

}