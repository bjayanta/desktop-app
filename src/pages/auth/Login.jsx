import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthLayout from '../../layouts/AuthLayout'
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import { auth } from '../../services/authService'

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
                {/* page title */}
                <div className="text-center py-2">
                    <h4>Sign In</h4>
                </div>

                {/* Sum text */}
                <p className="px-4 text-center">
                    <small>
                        One account for everything, including <strong>ShohozSales</strong>. {' '} 
                        <Link to="#" target="_blank">Learn more</Link>
                    </small>
                </p>

                {/* form */}
                <form action="#" className="my-2" onSubmit={ this.loginHandler }>
                    <div className="row g-3">
                        {/* user email address */}
                        <div className="col-12">
                            <label htmlFor="email-address" className="form-label required">Email address</label>
                            <input type="text" name="email" onChange={ this.inputHandler } className="form-control" id="email-address" placeholder="example@shohozsales.com" autoFocus required />
                        </div>

                        {/* password input */}
                        <div className="col-12">
                            <label htmlFor="password" className="form-label required">Password</label>
                            <div className="input-group">
                                <input type={ this.state.show ? 'text' : 'password' } name="password" onChange={ this.inputHandler } className="form-control" id="password" placeholder="* * * * * * * *" required />

                                <Link to="#" className="pass-eye" onClick={ this.showPassword }>
                                    { this.state.show ? <EyeFill /> : <EyeSlashFill /> } 
                                </Link>
                            </div>
                        </div>

                        {/* checkbox input */}
                        <div className="col-12">
                            <div className="form-check">
                                <input type="checkbox" name="remember" className="form-check-input" id="remember" />
                                <label className="form-check-label" htmlFor="remember">Remember me</label>
                            </div>
                        </div>

                        {/* button */}
                        <div className="col-12">
                            <button type="submit" className="btn btn-success w-100 d-flex justify-content-center align-items-center">
                                <span>Sign in</span>
                            </button>
                        </div>

                    </div>
                </form>

                {/* Sign in terms of use */}
                <div className="text-center border-bottom py-2">
                    <small>By clicking sign in, you agree to our <Link to="#">Terms</Link> and have read and acknowledge our <Link to="#">Global Privacy Statement.</Link></small>
                    <small className="d-block"><strong className="fw-bold mt-2">Updated on December 3, 2020</strong></small>
                </div>
                {/* <hr /> */}

                <div className="mt-2 text-center">
                    {/* forgot password */}
                    <small className="d-block"><Link to="#">Forgot Email address or Password</Link></small>
                    {/* Sign Up */}
                    <small className="d-block">New to the system? <Link to="#">Sign up</Link></small>
                </div>
            </AuthLayout>
        )
    }
}

export default withRouter(Login);
