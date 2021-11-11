import React, { Component } from 'react'
import AuthLayout from '../../components/AuthLayout'
import { Navigate, Redirect } from "react-router-dom";
import { auth } from '../../utils/authService'

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: auth.isAuthenticated
        }
    }

    loginHandler = () => {
        console.log(auth);

        auth.login(() => {
            console.log(auth);
        });

        this.setState({
            isAuthenticated: true
        })
    }

    render() {

        if(this.state.isAuthenticated === true) {
            // this.props.history.push('/');
            // return (<Navigate to="/" />);
            return (<Redirect to="/" />);
        }

        return (
            <AuthLayout>
                <form>
                    <h1>Login </h1>
                    <h4>Login {auth.isAuthenticated}</h4>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>

                    <button type="button" onClick={ this.loginHandler } className="bg-gray-400 text-black px-8 py-2 hover:bg-gray-600 hover:text-white">
                        Login
                    </button>
                </form>
            </AuthLayout>
        )
    }
}

export default Login;
