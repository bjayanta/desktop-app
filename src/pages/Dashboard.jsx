import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import AppLayout from '../components/AppLayout'
import { auth } from '../utils/authService'

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
            </AppLayout>
        )
    }
}

export default withRouter(Dashboard);
