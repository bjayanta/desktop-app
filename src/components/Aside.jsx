import React, { Component } from 'react' 
import { Link, NavLink, withRouter } from 'react-router-dom' 
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
    Gear, 
    Book } from 'react-bootstrap-icons';
import LogoWithName from '../assets/logos/logo_with_name.svg'

class Aside extends Component {

    render() {
        const pathname = this.props.history.location.pathname.split("/");
        console.log(pathname);

        return (
            <>
                {/* sidebar */}
                <aside className={ `page-aside ${ this.props.isAsideOpen ? '' : 'hide' }` }>
                    {/* aside brand */}
                    <div className="aside-brand">
                        <Link to="/" className="d-block py-2">
                            <img src={ LogoWithName } alt="Logo with name" />
                        </Link>
                    </div>
                    {/* aside brand end */}

                    <ul className="accordion" id="asideAccordion">
                        <h6 className="ps-3 py-2">Basic</h6>

                        <li className="accordion-item">
                            <Link to="/" className={`sigle-nav-link ${pathname[1] === '' ? 'active' : ''}`}>
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

                        <h6 className="ps-3 py-2">Configurations</h6>
                        <li className="accordion-item">
                            <Link to="#" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#settings" aria-expanded="false" aria-controls="settings">
                                <Gear />
                                <span>Settings</span>
                            </Link>

                            <ul id="settings" className="accordion-collapse collapse" aria-labelledby="headingSettings" data-bs-parent="#asideAccordion">
                                <li><Link to="#" className="nav-link">Roll & Policy</Link></li>
                                <li><Link to="#" className="nav-link">Group & Subgroup</Link></li>
                                <li><Link to="#" className="nav-link">Unit converters</Link></li>
                            </ul>
                        </li>

                        <li className="accordion-item">
                            <Link to="" className={`accordion-button ${pathname[1] === 'user' ? '' : 'collapsed'}`} data-bs-toggle="collapse" data-bs-target="#user" aria-expanded={(pathname[1] === 'user') ? 'true' : 'false'} aria-controls="user">
                                <People />
                                <span>Manage user</span>
                            </Link>

                            <ul id="user" className={`accordion-collapse collapse ${pathname[1] === 'user' ? 'show' : ''}`} aria-labelledby="headingUser" data-bs-parent="#asideAccordion">
                                <li><NavLink to="/user/list" className="nav-link" activeClassName={(pathname[2] === 'list') ? 'active' : ''}>All users</NavLink></li>
                                <li><NavLink to="/user/create" className="nav-link" activeClassName={(pathname[2] === 'create') ? 'active' : ''}>Create new</NavLink></li>
                            </ul>
                        </li>

                        <li className="accordion-item">
                            <Link to="#" className="sigle-nav-link">
                                <Book />
                                <span>User manual</span>
                            </Link>
                        </li>

                    </ul>
                </aside>
                {/* End sidebar */}

                {/* aside layer */}
                <div className={ `page-aside-layer ${ this.props.isAsideOpen ? '' : 'show' }` } onClick={ this.props.closeSidebar }></div>
                {/* aside layer end */}
            </>
        )
    }
}

export default withRouter(Aside);
