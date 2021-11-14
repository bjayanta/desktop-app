import React, { Component } from 'react'
// import Aside from '../pages/partials/Aside'
// import Navigation from '../pages/partials/Navigation'
import { Link } from 'react-router-dom'
import { 
    House, 
    Bag, 
    Cart3, 
    People, 
    Inboxes, 
    CreditCard, 
    CodeSlash, 
    Film, 
    FileEarmarkBreak, 
    ListNested, 
    BagCheck, 
    Basket, 
    Calculator, 
    ThreeDotsVertical, 
    InfoCircle, 
    Search, 
    Bell, 
    Gear, 
    Person } from 'react-bootstrap-icons';
import LogoWithName from '../assets/logos/logo_with_name.svg'
import Avatar from '../assets/avatar.jpg'

class AppLayout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSidebarOpen: true
        };
    }

    toggleSidebarHandler = () => {
        this.setState({
            isSidebarOpen: !this.state.isSidebarOpen
        });
    }

    render() {
        
        return (
            <>
                {/* sidebar */}
                <aside className={ `page-aside ${ this.state.isSidebarOpen ? '' : 'hide' }` }>
                    {/* aside brand */}
                    <div className="aside-brand">
                        <Link to="dashboard.html">
                            <img src={ LogoWithName } alt="" />
                        </Link>
                    </div>
                    {/* aside brand end */}

                    <ul className="accordion" id="asideAccordion">
                        <h6 className="ps-3 py-2">Basic</h6>
                        
                        <li className="accordion-item">
                            <Link to="#" className="sigle-nav-link active">
                                <House />
                                <span>Dashboard</span>
                            </Link>
                        </li>

                        <li className="accordion-item">
                            <Link to="#" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#purchase" aria-expanded="false" aria-controls="purchase">
                                <Bag />
                                <span>Purchase</span>
                            </Link>

                            <ul id="purchase" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#asideAccordion">
                                <li><Link to="purchase_records.html" className="nav-link">All Records</Link></li>
                                <li><Link to="purchase_entry.html" className="nav-link">New Entry</Link></li>
                            </ul>
                        </li>

                        <li className="accordion-item">
                            <Link to="#" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#sale" aria-expanded="false" aria-controls="sale">
                                <Cart3 />
                                <span>Sales</span>
                            </Link>

                            <ul id="sale" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#asideAccordion">
                                <li><Link to="sale_records.html" className="nav-link">All Records</Link></li>
                                <li><Link to="sale_entry.html" className="nav-link">New Entry</Link></li>
                            </ul>
                        </li>

                        <li className="accordion-item">
                            <Link to="#" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#parties" aria-expanded="false" aria-controls="parties">
                                <People />
                                <span>Parties</span>
                            </Link>

                            <ul id="parties" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#asideAccordion">
                                <li><Link to="supplier.html" className="nav-link">Supplier</Link></li>
                                <li><Link to="customer.html" className="nav-link">Customer</Link></li>
                            </ul>
                        </li>

                        <li className="accordion-item">
                            <Link to="#" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#stock" aria-expanded="false" aria-controls="stock">
                                <Inboxes />
                                <span>Stock</span>
                            </Link>

                            <ul id="stock" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#asideAccordion">
                                <li><Link to="supplier.html" className="nav-link">Supplier</Link></li>
                                <li><Link to="customer.html" className="nav-link">Customer</Link></li>
                            </ul>
                        </li>

                        <li className="accordion-item">
                            <Link to="#" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#banking" aria-expanded="false" aria-controls="banking">
                                <CreditCard />
                                <span>Banking</span>
                            </Link>

                            <ul id="banking" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#asideAccordion">
                                <li><Link to="bank_transaction.html" className="nav-link">All Transaction</Link></li>
                                <li><Link to="bank_entry.html" className="nav-link">New Entry</Link></li>
                            </ul>
                        </li>

                        <li className="accordion-item">
                            <Link to="#" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#components" aria-expanded="false" aria-controls="components">
                                <CodeSlash />
                                <span>Components</span>
                            </Link>

                            <ul id="components" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#asideAccordion">
                                <li><Link to="table.html" className="nav-link">Table</Link></li>
                                <li><Link to="form.html" className="nav-link">Form</Link></li>
                                <li><Link to="icon.html" className="nav-link">Icon</Link></li>
                                <li><Link to="button.html" className="nav-link">Button</Link></li>
                                <li><Link to="accordion.html" className="nav-link">Accordion</Link></li>
                            </ul>
                        </li>

                        <li className="accordion-item">
                            <Link to="#" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#media" aria-expanded="false" aria-controls="media">
                                <Film />
                                <span>Media</span>
                            </Link>

                            <ul id="media" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#asideAccordion">
                                <li><Link to="media_upload.html" className="nav-link">Upload</Link></li>
                                <li><Link to="media_gallery.html" className="nav-link">Gallery</Link></li>
                                <li><Link to="media_album.html" className="nav-link">Album</Link></li>
                            </ul>
                        </li>

                        <h6 className="ps-3 py-2">Pages</h6>
                        <li className="accordion-item">
                            <Link to="#" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#pages" aria-expanded="false" aria-controls="pages">
                                <FileEarmarkBreak />
                                <span>Pages</span>
                            </Link>

                            <ul id="pages" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#asideAccordion">
                                <li><Link to="voucher.html" className="nav-link">Voucher</Link></li>
                                <li><Link to="invoice.html" className="nav-link">Invoice</Link></li>
                                <li><Link to="gate_pass.html" className="nav-link">Gate Pass </Link></li>
                                <li><Link to="coming_soon_basic.html" className="nav-link">Basic Coming Soon</Link>
                                </li>
                                <li><Link to="countdown_coming_soon.html" className="nav-link">Countdown Coming Soon</Link></li>
                                <li><Link to="screen_lock.html" className="nav-link">Screen Lock</Link></li>
                                <li><Link to="preloader.html" className="nav-link">Preloader</Link></li>
                                <li><Link to="empty_page.html" className="nav-link">Empty Page </Link></li>
                                <li><Link to="under_construction.html" className="nav-link">Under Construction</Link></li>
                                <li><Link to="404.html" className="nav-link">404 Erorr</Link></li>
                                <li><Link to="500.html" className="nav-link">500 Erorr</Link></li>
                                <li><Link to="503.html" className="nav-link">503 Erorr</Link></li>
                            </ul>
                        </li>
                    </ul>
                </aside>
                {/* End sidebar */}

                {/* page-aside-layer */}
                <div className={ `page-aside-layer ${ this.state.isSidebarOpen ? '' : 'show' }` } onClick={ this.toggleSidebarHandler }></div>

                {/* main container */}
                <div className={ `mainbar ${ this.state.isSidebarOpen ? '' : 'expand' }` }>
                    <header>
                        <nav className="navbar page-navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                {/* aside expand button */}
                                <div className="expand-button">
                                    <button className="btn btn-success p-1" onClick={ this.toggleSidebarHandler }>
                                        <ListNested />
                                    </button>
                                </div>
                                {/* aside expand button end */}

                                {/* services menu */}
                                <div className="options-dropdown ms-3">
                                    <div className="button dropdown-toggle" type="button" id="services" data-bs-toggle="dropdown" aria-expanded="false">
                                        <Link to="#">Modules </Link>
                                    </div>

                                    <div className="dropdown-menu" aria-labelledby="services">
                                        <div className="container">
                                            <div className="module-wrapper dropdown">
                                                <div className="row g-4">
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                        <div className="row gy-2">
                                                            <div className="col-12">
                                                                <Link to="dashboard.html" className="module">
                                                                    <BagCheck />
                                                                    <p>PURCHASE</p>
                                                                </Link>
                                                            </div>

                                                            <div className="col-12">
                                                                <Link to="dashboard.html" className="module">
                                                                    <Basket />
                                                                    <p>sales</p>
                                                                </Link>
                                                            </div>

                                                            <div className="col-12">
                                                                <Link to="dashboard.html" className="module">
                                                                    <People />
                                                                    <p>CRM</p>
                                                                </Link>
                                                            </div>

                                                            <div className="col-12">
                                                                <Link to="dashboard.html" className="module">
                                                                    <Calculator />
                                                                    <p>Accounting</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                                        <div className="row gy-2">
                                                            <div className="col-12">
                                                                <Link to="dashboard.html" className="module">
                                                                    <BagCheck />
                                                                    <p>PURCHASE</p>
                                                                </Link>
                                                            </div>

                                                            <div className="col-12">
                                                                <Link to="dashboard.html" className="module">
                                                                    <Basket />
                                                                    <p>sales</p>
                                                                </Link>
                                                            </div>

                                                            <div className="col-12">
                                                                <Link to="#" className="module">
                                                                    <People />
                                                                    <p>CRM</p>
                                                                </Link>
                                                            </div>

                                                            <div className="col-12">
                                                                <Link to="dashboard.html" className="module">
                                                                    <Calculator />
                                                                    <p>Accounting</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                    </header>

                    {/* content */}
                    <div className="container">
                        <h1>Dashboard</h1>
                        { this.props.children }
                    </div>
                    {/* content end */}
                </div>
                {/* main container end */}
            </>

            // <div className="bg-gray-50 relative min-h-screen md:flex">
            //     {/* asidebar */}
            //     <aside className={ `${ asideClass.join(' ')} z-50` }>
            //         <Aside />
            //     </aside>
                
            //     {/* content */}
            //     <section className="flex-1">
            //         <Navigation toggleAsideEvent={ this.toggleSidebarHandler } />

            //         <main className="p-10">
            //             
            //         </main>
            //     </section>
            // </div>
        )
    }
}

export default AppLayout;
