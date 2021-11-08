import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'

// pages
import Login from "../auth/Login";
import Register from "../auth/Register";
import Dashboard from "../Dashboard";
import PageNotFound from "../PageNotFound";

export default class RouterArea extends Component {

    render() {
        return (
            <div>
                <Routes>
                    {/* auth */}
                    <Route path="/login" element={ <Login /> } />
                    <Route path="/register" element={ <Register /> } />

                    {/* protceted */}
                    <Route path="/" element={ <Dashboard /> } />

                    {/* 404 */}
                    <Route element={ <PageNotFound /> } />
                </Routes>
            </div>
        )
    }

}