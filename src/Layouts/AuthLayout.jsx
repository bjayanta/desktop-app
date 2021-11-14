import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LogoWithName from '../assets/logos/logo_with_name.svg'
import '../sass/authentication.scss'

export default class AuthLayout extends Component {

    state = {
        error: false,
        show: false
    };

    showPassword = () => {
        this.setState({
            show: !this.state.show
        });
    }

    render() {

        return (
            <>
                {/* authentication */}
                <section className="authentication">

                    {/* main wrapper */}
                    <div className="wrapper">
                        {/* alert message */}
                        { this.state.error ? (
                            <div className="alert alert-danger p-2 mb-0 border-0 rounded-0" role="alert">
                                Link simple danger alert—check it out!
                            </div> 
                        ) : '' }
                        
                        <div className="wrap-content">
                            <div className="p-4 pt-2">
                                {/* Brand logo */}
                                <div className="text-center border-bottom">
                                    <img src={ LogoWithName } className="logo" alt="Brand logo" />
                                </div>

                                {/* auth  */}
                                { this.props.children }

                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="d-flex justify-content-between text-light mt-2 px-2">
                            <small>
                                &copy; 2020 {' '}
                                <Link to="https://maxsop.com/" target="_blank">MaxSOP</Link>. 
                                <span>{' '}All rights reserved.</span>
                            </small>

                            <small>
                                <Link to="#" target="_blank">Privacy</Link>{' | '}
                                <Link to="#" target="_blank">Support</Link>
                            </small>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
