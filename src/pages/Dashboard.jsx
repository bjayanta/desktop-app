import React, { Component } from 'react'
import AppLayout from '../components/AppLayout'
import { auth } from '../utils/authService'
import { Navigate, Redirect } from 'react-router-dom'

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: auth.isAuthenticated
        }
    }

    logoutHandler = () => {
        console.log(auth);

        auth.logout(() => {
            console.log(auth);
        });

        this.setState({
            isAuthenticated: false
        })
    }

    render() {
        console.log(this.props.history);

        if(this.state.isAuthenticated === false) {
            return (<Redirect to="/login" />);
            // return (<Navigate to="/login" />);
            // this.props.history.push('/login');
        }

        return (
            <AppLayout>
                <h2>Dashboard </h2>
                <h4>Login {auth.isAuthenticated}</h4>

                <div>
                    <button type="button" onClick={ this.logoutHandler } className="bg-gray-400 text-black px-8 py-2 hover:bg-gray-600 hover:text-white">
                        Sign out
                    </button>
                </div>
            </AppLayout>
        )
    }
}

export default Dashboard;
