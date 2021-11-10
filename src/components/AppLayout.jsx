import React, { Component } from 'react'
import Header from '../pages/partials/Header'
import Footer from '../pages/partials/Footer'

export default class AppLayout extends Component {
    render() {
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
