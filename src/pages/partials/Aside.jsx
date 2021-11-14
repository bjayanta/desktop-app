import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from '../../components/Dropdown'

export default class Aside extends Component {
    render() {

        return (
            <>
                {/* brand or logo */}
                <Link to="#" className="text-white flex items-center px-4 space-x-2">
                    Icon
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

                        <Dropdown title="Category" addClass="w-full text-left px-4 py-2 transition duration-200 hover:bg-blue-700 hover:text-white">
                            <ul>
                                <li><Link to="#" className="block py-2 px-4 transition duration-200 hover:bg-blue-700 hover:text-white">All records</Link></li>
                                <li><Link to="#" className="block py-2 px-4 transition duration-200 hover:bg-blue-700 hover:text-white">Create new</Link></li>
                            </ul>
                        </Dropdown>

                        <Dropdown title="Subcategory" addClass="w-full text-left px-4 py-2 transition duration-200 hover:bg-blue-700 hover:text-white">
                            <ul>
                                <li><Link to="#" className="block py-2 px-4 transition duration-200 hover:bg-blue-700 hover:text-white">All records</Link></li>
                                <li><Link to="#" className="block py-2 px-4 transition duration-200 hover:bg-blue-700 hover:text-white">Create new</Link></li>
                            </ul>
                        </Dropdown>
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
