import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navigation extends Component { 

    render() {
        return (
            <div className="bg-gray-200 flex space-x-4">
                <ul>
                    <li className="p-2">
                        <NavLink className={(nav) => nav.isActive ? 'font-bold text-red-400' : ''} to="/">Dashboard</NavLink>
                    </li>
                </ul>

                <ul className="flex space-x-4">
                    <li className="p-2">
                        <NavLink to="/login" className={(nav) => nav.isActive ? 'font-bold text-red-400' : ''}>
                            Login
                        </NavLink>
                    </li>

                    <li className="p-2">
                        <NavLink to="/register" className={(nav) => nav.isActive ? 'font-bold text-red-400' : ''}>
                            Register
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }

}