import React, { Component } from 'react'
import AppLayout from '../layouts/AppLayout'
import MaxSOP from '../assets/logos/maxsop_logo.png'

export default class Dashboard extends Component {

    notificationHandler = () => {
        new Notification("Hello", {
            icon: MaxSOP,
            body: "Hello Wold!",
            requireInteraction: false
        });
    }

    render() {
        
        return (
            <AppLayout>
                <h2>Dashboard </h2>
                <h4>Login </h4>
                <button onClick={ this.notificationHandler }>Notification</button>

                <small>Node v{ window.versions.node }, Electron v{ window.versions.electron }, Javascript V8 engine v{ window.versions.electron }</small>
            </AppLayout>
        )
    }
}

