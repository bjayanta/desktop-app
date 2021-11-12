import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Aside extends Component {
    render() {

        return (
            <>
                {/* brand or logo */}
                <Link to="#" className="text-white flex items-center px-4 space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z"/>
                    </svg>

                    <span className="text-2xl font-extrabold">MaxSOP</span>
                </Link>
                
                {/* nav */}
                <nav className="space-y-4">
                    <div>
                        <h5 className="block py-2 px-4 font-semibold text-blue-400">Basic</h5>
                        <ul>
                            <li><Link to="#" className="block py-2 px-4 transition duration-200 hover:bg-blue-700 hover:text-white">Dashboard</Link></li>
                            <li><Link to="#" className="block py-2 px-4 transition duration-200 hover:bg-blue-700 hover:text-white">Purchase</Link></li>
                            <li><Link to="#" className="block py-2 px-4 transition duration-200 hover:bg-blue-700 hover:text-white">Sale</Link></li>
                            <li><Link to="#" className="block py-2 px-4 transition duration-200 hover:bg-blue-700 hover:text-white">Parties</Link></li>
                            <li><Link to="#" className="block py-2 px-4 transition duration-200 hover:bg-blue-700 hover:text-white">Stock</Link></li>
                            <li><Link to="#" className="block py-2 px-4 transition duration-200 hover:bg-blue-700 hover:text-white">Banking</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="block py-2 px-4 font-semibold text-blue-400">Settings</h5>
                        <ul>
                            <li><Link to="#" className="block py-2 px-4 transition duration-200 hover:bg-blue-700 hover:text-white">Components</Link></li>
                            <li><Link to="#" className="block py-2 px-4 transition duration-200 hover:bg-blue-700 hover:text-white">Pages</Link></li>
                            <li><Link to="#" className="block py-2 px-4 transition duration-200 hover:bg-blue-700 hover:text-white">Media</Link></li>
                            <li><Link to="#" className="block py-2 px-4 transition duration-200 hover:bg-blue-700 hover:text-white">Bank</Link></li>
                            <li><Link to="#" className="block py-2 px-4 transition duration-200 hover:bg-blue-700 hover:text-white">Unit</Link></li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}
