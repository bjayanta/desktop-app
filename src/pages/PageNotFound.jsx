import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <div>
            <h3>404, Page not found!</h3>
            <Link to="/">Home</Link>
        </div>
    )
}
