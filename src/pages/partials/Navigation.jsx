import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navigation extends Component { 

    render() {
        
        return (
            <div>
                <ul>
                    <li><NavLink className={(navData) => navData.isActive ? 'font-bold text-red-400' : ''} to="/">Dashboard</NavLink></li>
                </ul>

                <ul>
                    <li><NavLink to="/login" className={(navData) => navData.isActive ? 'font-bold text-red-400' : ''}>Login</NavLink></li>
                    <li><NavLink to="/register" className={(navData) => navData.isActive ? 'font-bold text-red-400' : ''}>Register</NavLink></li>
                </ul>
            </div>
        )
    }

}