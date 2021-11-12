import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AuthLayout extends Component {
    render() {

        return (
            <div className="h-screen flex items-center justify-center bg-gray-700 shadow-md">
                <div className="max-w-md mx-auto overflow-hidden">
                    <div className="bg-white rounded-xl space-y-2 overflow-hidden">

                        {/* alert message */}
                        <div className="text-center p-4 bg-red-100 text-red-600">
                            A simple danger alert—check it out!
                        </div>

                        <div>
                            {/* logo */}
                            <figure className="px-8 py-3 space-y-5">
                                {/* <img src="/images/logo.png" className="h-24 mx-auto rounded-full ring-4 ring-teal-600" alt="JB logo"> */}
                                
                                <figcaption className="text-center space-y-2">
                                    <h3 className="text-lg text-gray-600 font-semibold uppercase">MaxSOP</h3>
                                    <p className="text-sm text-gray-600">
                                        One account for everything Intuit, including online. 
                                        <br />
                                        <Link to="#" target="_blank" className="underline text-teal-600 hover:no-underline">Learn more</Link>
                                    </p> 
                                </figcaption>
                            </figure>

                            { this.props.children }
                        </div>
                    </div>

                    {/* footer */}
                    <div className="flex justify-between text-sm text-white mt-3 px-4 md:px-0">
                        <span>
                            &copy; 2020 { ' ' }
                            <Link to="https://maxsop.com" target="_blank" className="underline hover:no-underline">MaxSOP</Link>. 
                            All rights reserved.
                        </span>

                        <nav>
                            <Link to="#" className="underline hover:no-underline">Privacy</Link>{ ' | ' } 
                            <Link to="#" className="underline hover:no-underline">Support</Link>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}
