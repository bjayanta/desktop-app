import React, { Component } from 'react'

export default class AuthLayout extends Component {
    render() {
        return (
            <div className="bg-green-200">
                <h1>Auth layout</h1>
                { this.props.children }
            </div>
        )
    }
}
