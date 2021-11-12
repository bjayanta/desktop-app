import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navigation extends Component { 

    render() {
        return (
            <div className="bg-gray-200 flex space-x-4">
                <ul>
                    <li className="p-2">
                        <NavLink exact to="/" activeClassName="font-bold text-red-400">
                            Dashboard
                        </NavLink>
                    </li>
                </ul>

                <ul className="flex space-x-4">
                    <li className="p-2">
                        <NavLink exact to="/login" activeClassName="font-bold text-red-400">
                            Login
                        </NavLink>
                    </li>

                    <li className="p-2">
                        <NavLink exact to="/register" activeClassName="font-bold text-red-400">
                            Register
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }

}