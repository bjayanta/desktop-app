import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthLayout from '../../Layouts/AuthLayout'
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

    loginHandler = (e) => {
        e.preventDefault();
        
        auth.login(() => {
            this.props.history.push('/');
        });
    }

    render() {
        console.log(auth);

        return (
            <AuthLayout>
                <form onSubmit={ this.loginHandler } className="px-8">
                    <div className="mb-3 space-y-1">
                        <label htmlFor="" className="text-gray-600">Email address</label>
                        <div>
                            <input type="text" name="email" onChange={ this.inputHandler } placeholder="user@maxsop.com" className="w-full px-3 py-1.5 ring-1 ring-teal-600 rounded-sm focus:outline-none focus:ring-teal-800" autoFocus required />
                        </div>
                    </div>

                    <div className="mb-3 space-y-1">
                        <label htmlFor="" className="text-gray-600">Password</label>
                        <div>
                            <input type="password" name="password" onChange={ this.inputHandler } placeholder="* * * * * * * *" className="w-full px-3 py-1.5 ring-1 ring-teal-600 rounded-sm focus:outline-none focus:ring-teal-800" required />
                        </div>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="remember-me" className="cursor-pointer">
                            <input type="checkbox" id="remember-me" />
                            <span className="cursor-pointer text-gray-600"> Remember me</span>
                        </label>
                    </div>

                    <button type="submit" className="w-full p-2 bg-teal-600 text-white border border-teal-600 rounded-sm hover:bg-teal-800">
                        Sign in
                    </button>
                </form>

                {/* footer */}
                <div className="text-center text-sm">
                    <div className="text-sm border-b space-y-2 py-3">
                        <p className="text-gray-500">By clicking sign in, you agree to our <Link to="#" className="underline text-teal-600 hover:no-underline">terms</Link> and have read and acknowledge our <Link to="#" className="underline text-teal-600 hover:no-underline">global privacy</Link> statement.</p>
                        <p className="text-gray-800">Updated on December 3, 2020</p>
                    </div>
                    
                    <div className="py-5">
                        <p><Link to="#" className="underline text-teal-600 hover:no-underline">Forgot username or password?</Link></p>
                        <p>New to the system? <Link to="#" className="underline text-teal-600 hover:no-underline">Sign up</Link></p>
                    </div>
                </div>
            </AuthLayout>
        )
    }
}

export default withRouter(Login);
