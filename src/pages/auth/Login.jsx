import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import AuthLayout from '../../components/AuthLayout'
import { auth } from '../../utils/authService'

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    loginHandler = () => {
        auth.login(() => {
            this.props.history.push('/');
        });
    }

    render() {
        console.log(auth);

        return (
            <AuthLayout>
                <form>
                    <h1>Login </h1>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" onChange={ this.inputHandler } />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={ this.inputHandler } />
                    </div>

                    <button type="button" onClick={ this.loginHandler } className="bg-gray-400 text-black px-8 py-2 hover:bg-gray-600 hover:text-white">
                        Login
                    </button>
                </form>
            </AuthLayout>
        )
    }
}

export default withRouter(Login);
