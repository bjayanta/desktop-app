import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navigation extends Component { 

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="font-bold text-red-400">
                            Dashboard
                        </NavLink>
                    </li>
                </ul>

                <ul>
                    <li>
                        <NavLink exact to="/login" activeClassName="font-bold text-red-400">
                            Login
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact to="/register" activeClassName="font-bold text-red-400">
                            Register
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }

}