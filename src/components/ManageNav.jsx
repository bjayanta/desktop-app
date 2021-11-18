import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Gear } from 'react-bootstrap-icons';

export default class ManageNav extends Component {
    render() {
        return (
            <>
                <li className="nav-item dropdown">
                    <Link to="#" className="nav-link" id="settings-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="d-lg-none me-3">Settings</span>
                        <Gear />
                    </Link>

                    <div className="dropdown-menu settings-dropdown" aria-labelledby="settings-dropdown">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item pb-2"><strong>Manage </strong></li>
                                    <li className="list-group-item"><Link to="#" className="list-group-item-action"></Link></li>
                                    <li className="list-group-item"><Link to="#" className="list-group-item-action"></Link></li>
                                    <li className="list-group-item"><Link to="#" className="list-group-item-action"></Link></li>
                                </ul>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item pb-2"><strong>Settings</strong></li>
                                    <li className="list-group-item"><Link to="#" className="list-group-item-action"></Link></li>
                                    <li className="list-group-item"><Link to="#" className="list-group-item-action"></Link></li>
                                    <li className="list-group-item"><Link to="#" className="list-group-item-action"></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </>
        )
    }
}
