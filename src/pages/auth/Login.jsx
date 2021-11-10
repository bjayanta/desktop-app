import React, { Component } from 'react'
import AuthLayout from '../../components/AuthLayout'
import { auth } from '../../utils/auth'

export default class Login extends Component {

    login = () => {
        console.log(auth.isAuthenticated);

        auth.login( () => {
            console.log(auth.isAuthenticated);
            this.props.navigation.navigate('/');
        });
    }

    render() {
        return (
            <AuthLayout>
                <form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>

                    <button type="button" onClick={ this.login } className="bg-gray-400 text-black px-8 py-2 hover:bg-gray-600 hover:text-white">
                        Login
                    </button>
                </form>
            </AuthLayout>
        )
    }
}
