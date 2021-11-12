import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component { 

    render() {
        console.log(this.props);

        return (
            <>
                {/* top navbar */}
                <nav className="bg-gray-800 text-gray-100 flex justify-between">
                    <div className="flex items-center">
                        {/* brand or logo */}
                        <div className="md:hidden">
                            <Link to="#" className="text-white flex items-center space-x-2 px-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z"/>
                                </svg>

                                <span className="text-2xl font-extrabold">MaxSOP</span>
                            </Link>
                        </div>

                        {/* links */}
                        <Link to="/" className="p-4">Dashboard</Link>
                        <Link to="/" className="p-4">Dashboard</Link>
                        <Link to="/" className="p-4">Dashboard</Link>
                    </div>

                    {/* aside toggle button */}
                    <button className="p-4 focus:bg-gray-700 md:hidden" onClick={ this.props.toggleAsideEvent }>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </nav>
            </>
        )
    }

}