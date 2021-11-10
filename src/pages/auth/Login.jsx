import React, { Component } from 'react'
import AuthLayout from '../../components/AuthLayout'

export default class Login extends Component {
    render() {
        return (
            <AuthLayout>
                <form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>

                    <button type="submit">Login</button>
                </form>
            </AuthLayout>
        )
    }
}
