import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { 
    ListNested, 
    ThreeDotsVertical, 
    InfoCircle, 
    Search, 
    Bell, 
    Person } from 'react-bootstrap-icons';
import Avatar from '../assets/avatar.jpg'
import { auth } from '../services/authService'
import ModuleNav from './ModuleNav'

class Navigation extends Component {
    logoutHandler = () => {
        auth.logout(() => {
            this.props.history.push('/login')
        });
    }

    render() {
        return (
            <>
                <nav className="navbar page-navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        {/* aside expand button */}
                        <div className="expand-button">
                            <button className="btn btn-success p-1" onClick={ this.props.toggleSidebar }>
                                <ListNested />
                            </button>
                        </div>
                        {/* aside expand button end */}

                        {/* services menu */}
                        <ModuleNav />
                        {/* services menu end */}

                        {/* responsive button */}
                        <button type="button" className="navbar-toggler p-1 ms-auto" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <ThreeDotsVertical />
                        </button>
                        {/* responsive button end */}

                        {/* navbar */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav my-2 text-end ms-auto mb-lg-0 py-3 py-lg-0">
                                {/* Help */}
                                <li className="nav-item">
                                    <Link to="#" className="nav-link" aria-current="page">
                                        <span className="me-3 me-lg-1">Help</span>
                                        <InfoCircle />
                                    </Link>
                                </li>

                                {/* Search */}
                                <li className="nav-item ">
                                    <Link className="nav-link" to="#" id="search-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="d-lg-none me-3">Search</span>
                                        <Search />
                                    </Link>

                                    <div className="dropdown-menu search-dropdown p-2" aria-labelledby="search-dropdown">
                                        <form action="#">
                                            <input type="text" className="form-control" placeholder="Search ...." />
                                            <button className="btn" type="submit">
                                                <Search />
                                            </button>
                                        </form>

                                        <div className="list-group">
                                            <Link to="#" className="list-group-item list-group-item-action">
                                                <Search />
                                                <span>Dapibus ac facilisis in</span>
                                            </Link>

                                            <Link to="#" className="list-group-item list-group-item-action">
                                                <Search />
                                                <span>Dapibus ac facilisis in</span>
                                            </Link>

                                            <Link to="#" className="list-group-item list-group-item-action">
                                                <Search />
                                                <span>Dapibus ac facilisis in</span>
                                            </Link>
                                        </div>
                                    </div>
                                </li>

                                {/* Notification */}
                                <li className="nav-item dropdown">
                                    <Link to="#" className="nav-link" id="notification-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="d-lg-none me-3">Notification</span>
                                        <Bell />
                                    </Link>

                                    <ul className="dropdown-menu notification-dropdown py-2" aria-labelledby="notification-dropdown">
                                        <h5 className="ms-3 mb-1">Notification</h5>
                                        <hr />
                                        <li><Link className="dropdown-item" to="#">Dapibus ac facilisis in</Link></li>
                                        <li><Link className="dropdown-item" to="#">Morbi leo risus</Link></li>
                                        <li><Link className="dropdown-item" to="#">Porta ac consectetur ac</Link></li>
                                        <li><Link className="dropdown-item" to="#">Vestibulum at eros</Link></li>
                                        <hr />
                                        <div className="text-center mt-1"><Link to="#">See all</Link></div>
                                    </ul>
                                </li>

                                {/* user menu */}
                                <li className="nav-item dropdown">
                                    <Link to="#" className="nav-link" id="user-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="d-lg-none me-3">Profile</span>
                                        <Person />
                                    </Link>

                                    <ul className="dropdown-menu" aria-labelledby="user-dropdown">
                                        <li>
                                            <Link className="dropdown-item" to="user_profile.html">
                                                <div className="d-flex align-items-center my-2">
                                                    <img src={ Avatar } className="user-icon" alt="" />

                                                    <div className="ms-2">
                                                        <h6>Musab Osman</h6>
                                                        <div className="text-small">musabosman3104@gmail.com</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <hr />

                                        <li><Link className="dropdown-item" to="user_settings.html">Settings</Link></li>
                                        <li><Link className="dropdown-item" to="attendance.html">Attendance</Link></li>
                                        <li><Link className="dropdown-item" to="change_password.html">Change Password</Link></li>
                                        <hr />
                                        <li><Link className="dropdown-item" to="#" onClick={ this.logoutHandler }>Log Out</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/* navbar end */}
                    </div>
                </nav>
            </>
        )
    }
}

export default withRouter(Navigation);
