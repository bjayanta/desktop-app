import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from '../utils/authService'
import Header from '../pages/partials/Header'
import Footer from '../pages/partials/Footer'

export default class AppLayout extends Component {
    render() {
        if(!auth.isAuthenticated) {
            return (<Redirect to="/login" />);
        }

        return (
            <div className="w-full">
                <h1>App layout.</h1>
                
                <Header />
                { this.props.children }
                <Footer />
            </div>
        )
    }
}
