import React, { Component } from 'react'
import AppLayout from '../layouts/AppLayout'

export default class Dashboard extends Component {

    render() {
        
        return (
            <AppLayout>
                <h2>Dashboard </h2>
                <h4>Login </h4>

                <small>Node v{ window.versions.node }, Electron v{ window.versions.electron }, Javascript V8 engine v{ window.versions.electron }</small>
            </AppLayout>
        )
    }
}

