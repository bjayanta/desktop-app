import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { 
    People, 
    PersonVideo3,
    ListNested, 
    BagCheck, 
    BagDash,
    Basket, 
    Calculator, 
    ThreeDotsVertical, 
    InfoCircle, 
    Search, 
    Bell, 
    Gear, 
    Person,
    Headset,
    Folder } from 'react-bootstrap-icons';
import Avatar from '../assets/avatar.jpg'

export default class Navigation extends Component {
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
                        <div className="mega-menu ms-3">
                            <div className="button dropdown-toggle" type="button" id="services" data-bs-toggle="dropdown" aria-expanded="false">
                                <Link to="#">Modules </Link>
                            </div>

                            <div className="dropdown-menu mt-3 show" aria-labelledby="services">
                                <div className="container-fluid">
                                    <div className="d-flex justify-content-start align-items-start py-4">
                                        <ul className="p-0">
                                            <li><Link to="#"><BagCheck /> Purchase </Link></li>
                                            <li><Link to="#"><Basket /> Sale </Link></li>
                                            <li><Link to="#"><BagDash /> Expense </Link></li>
                                            <li><Link to="#"><Headset /> Contacts </Link></li>
                                        </ul>

                                        <ul>
                                            <li><Link to="#"><PersonVideo3 /> CRM </Link></li>
                                            <li><Link to="#"><People /> HRM </Link></li>
                                            <li><Link to="#"><Calculator /> Accounting </Link></li>
                                        </ul>

                                        <ul>
                                            <li><Link to="#"><Folder />Manage </Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
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

                                {/* Settings mega menu */}
                                <li className="nav-item dropdown">
                                    <Link to="#" className="nav-link" id="settings-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="d-lg-none me-3">Settings</span>
                                        <Gear />
                                    </Link>

                                    <div className="dropdown-menu settings-dropdown" aria-labelledby="settings-dropdown">
                                        <div className="row">
                                            <div className="col-12 col-md-6 col-lg-3">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item pb-2"><strong>Company </strong></li>
                                                    <li className="list-group-item"><Link to="company_profile.html" className="list-group-item-action">Company Profile</Link></li>
                                                    <li className="list-group-item"><Link to="employee_list.html" className="list-group-item-action">Employees</Link></li>
                                                    <li className="list-group-item"><Link to="about_us.html" className="list-group-item-action">About Us</Link></li>
                                                    <li className="list-group-item"><Link to="services.html" className="list-group-item-action" >Services</Link></li>
                                                </ul>
                                            </div>

                                            <div className="col-12 col-md-6 col-lg-3">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item pb-2"><strong>Cras justo odio</strong></li>
                                                    <li className="list-group-item"><Link to="terms.html" className="list-group-item-action">Terms & Conditions</Link></li>
                                                    <li className="list-group-item"><Link to="asked_question.html" className="list-group-item-action">FAQs</Link></li>
                                                    <li className="list-group-item"><Link to="license.html" className="list-group-item-action">License</Link></li>
                                                    <li className="list-group-item"><Link to="copyright.html" className="list-group-item-action">Copyright</Link></li>
                                                </ul>
                                            </div>

                                            <div className="col-12 col-md-6 col-lg-3">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item pb-2"><strong>Cras justo odio</strong></li>
                                                    <li className="list-group-item"><Link to="#" className="list-group-item-action">Cras justo odio</Link></li>
                                                    <li className="list-group-item"><Link to="#" className="list-group-item-action" >Cras justo odio</Link></li>
                                                    <li className="list-group-item"><Link to="#" className="list-group-item-action">Cras justo odio</Link></li>
                                                </ul>
                                            </div>

                                            <div className="col-12 col-md-6 col-lg-3">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item pb-2"><strong>Cras justo odio</strong></li>
                                                    <li className="list-group-item"><Link to="#" className="list-group-item-action">Cras justo odio</Link></li>
                                                    <li className="list-group-item"><Link to="#" className="list-group-item-action">Cras justo odio</Link></li>
                                                    <li className="list-group-item"><Link to="#" className="list-group-item-action">Cras justo odio</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
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
                                        <li><Link className="dropdown-item" to="#">Log Out</Link></li>
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
