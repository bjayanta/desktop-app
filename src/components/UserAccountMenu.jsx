import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UserAccountMenu extends Component {
    constructor(props) {
        super(props);

        this.container = React.createRef();

        this.state = {
            isOpen: false
        }

    }

    componentDidMount() {
        document.addEventListener("click", this.clickOutsideHandler, true);
    }

    componentWillUnmount() {
        document.addEventListener("click", this.clickOutsideHandler, true);
    }

    dropdownHandler = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    clickOutsideHandler = (event) => {
        if(this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                isOpen: false
            });
        }
    }

    render() {
        return (
            <div className="relative p-4" ref={ this.container }>
                {/* clickable button */}
                <button className="block w-6 h-6 rounded-full overflow-hidden border-2 border-gray-800 hover:border-blue-800" onClick={ this.dropdownHandler }>
                    <img src={ this.props.avatar } className="h-full w-full object-cover" alt="Avatar" />
                </button>

                {/* list */}
                {this.state.isOpen && (
                    <ul className="bg-white absolute right-0 w-72 mt-2 mr-4 rounded-lg border shadow-md z-50 overflow-hidden">
                        <li className="border-b p-4">
                            <figure className="flex items-center">
                                <img src={ this.props.avatar } alt="Avatar" className="w-12 h-12 rounded-full" />

                                <figcaption className="ml-2">
                                    <Link to="#" className="text-sm hover:text-blue-800">
                                        <strong>Musab Osman</strong>
                                        <p>musabosman3104@gmail.com</p>
                                    </Link>
                                </figcaption>
                            </figure>
                        </li>

                        <li><Link to="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-800 hover:text-white">Attendance</Link></li>
                        <li><Link to="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-800 hover:text-white">Settings</Link></li>
                        <li><Link to="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-800 hover:text-white">Profile</Link></li>

                        <li className="border-t">
                            <Link to="#" className="block p-4 text-gray-800 hover:bg-blue-800 hover:text-white">
                                Signout
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        )
    }
}
