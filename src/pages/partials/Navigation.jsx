import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../assets/avatar.jpg'
import UserAccountMenu from '../../components/UserAccountMenu'

export default class Navigation extends Component { 

    render() {

        return (
            <>
                {/* top navbar */}
                <nav className="text-gray-600 flex justify-between">
                    <div className="flex items-center">
                        {/* brand or logo */}
                        <div className="md:hidden">
                            <Link to="#" className="flex items-center space-x-2 p-4">
                                abc
                                <span className="text-2xl font-extrabold">MaxSOP</span>
                            </Link>
                        </div>

                        {/* links */}
                        <Link to="/" className="p-4">Dashboard</Link>
                    </div>

                    {/* aside toggle button */}
                    <div className="flex items-center">
                        <Link to="/" className="p-4 hover:text-blue-800 focus:text-blue-800" title="Informations">
                            abc
                        </Link>

                        <Link to="/" className="p-4 hover:text-blue-800 focus:text-blue-800" title="Notifications">
                            abc
                        </Link>

                        <Link to="/" className="p-4 hover:text-blue-800 focus:text-blue-800" title="Settings">
                            abc
                        </Link>

                        <UserAccountMenu avatar={ Avatar } />

                        <button className="p-4 hover:text-blue-800 focus:text-blue-800 md:hidden" onClick={ this.props.toggleAsideEvent }>
                            abc
                        </button>
                    </div>
                </nav>
            </>
        )
    }

}