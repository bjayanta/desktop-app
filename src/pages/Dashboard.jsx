import React, { Component } from 'react'
import AppLayout from '../components/AppLayout'
import AuthContext from '../contexts/authContext'

export default class Dashboard extends Component {
    static contextType = AuthContext

    logout = () => {
        console.log(this.context.isAuthenticated);

        this.context.logout( () => {
            console.log(this.context.isAuthenticated);
            this.props.navigation.navigate('/login');
        });
    }

    render() {
        // const { isAuthenticated } = this.context;
        // console.log(this.context);

        return (
            <AppLayout>
                <h2>Dashboard </h2>

                <div>
                    <button type="button" onClick={this.logout}>
                        Sign out
                    </button>
                </div>
            </AppLayout>
        )
    }
}
