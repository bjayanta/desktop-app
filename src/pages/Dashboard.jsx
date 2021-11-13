import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AppLayout from '../Layouts/AppLayout'
import { auth } from '../utils/authService'

import Dropdown from '../components/Dropdown'

class Dashboard extends Component {

    logoutHandler = () => {
        auth.logout(() => {
            this.props.history.push('/login')
        });
    }

    render() {
        console.log(auth);
        
        return (
            <AppLayout>
                <h2>Dashboard </h2>
                <h4>Login </h4>

                <div>
                    <button type="button" onClick={ this.logoutHandler } className="bg-gray-400 text-black px-8 py-2 hover:bg-gray-600 hover:text-white">
                        Sign out
                    </button>
                </div>

                <Dropdown title="Menu 1">
                    <ul>
                        <li><Link to="#">1</Link></li>
                        <li><Link to="#">2</Link></li>
                        <li><Link to="#">3</Link></li>
                        <li><Link to="#">4</Link></li>
                        <li><Link to="#">5</Link></li>
                    </ul>
                </Dropdown>

                <Dropdown title="Menu 1">
                    <ul>
                        <li><Link to="#">a</Link></li>
                        <li><Link to="#">b</Link></li>
                        <li><Link to="#">c</Link></li>
                        <li><Link to="#">d</Link></li>
                        <li><Link to="#">e</Link></li>
                    </ul>
                </Dropdown>
            </AppLayout>
        )
    }
}

export default withRouter(Dashboard);
