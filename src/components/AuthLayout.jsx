import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from '../utils/authService'

export default class AuthLayout extends Component {
    render() {
        if(auth.isAuthenticated) {
            return (<Redirect to="/" />);
        }

        return (
            <div className="bg-green-200">
                <h1>Auth layout</h1>
                { this.props.children }
            </div>
        )
    }
}
