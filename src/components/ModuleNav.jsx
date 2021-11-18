import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { 
    People, 
    PersonVideo3,
    BagCheck, 
    BagDash,
    Basket, 
    Calculator,
    Headset,
    Folder } from 'react-bootstrap-icons';

export default class Modules extends Component {
    render() {
        return (
            <div className="mega-menu ms-3">
                <div className="button dropdown-toggle" type="button" id="services" data-bs-toggle="dropdown" aria-expanded="false">
                    <Link to="#">Modules </Link>
                </div>

                <div className="dropdown-menu" aria-labelledby="services">
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
        )
    }
}
