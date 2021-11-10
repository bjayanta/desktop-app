import React, { Component } from 'react'
import AppLayout from '../components/AppLayout'

export default class Dashboard extends Component {
    
    render() {
        console.log(this.context);

        return (
            <AppLayout>
                <h2>Dashboard </h2>

                <div>
                    <button>Sign out</button>
                </div>
            </AppLayout>
        )
    }
}
