import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppLayout from '../../../layouts/AppLayout'
import PrintHead from '../../partials/PrintHead'

export default class list extends Component {
    render() {
        return (
            <AppLayout>
                {/* menu */}
                <div className="container print-none">
                    <ul className="nav nav-tabs mt-2 print-none">
                        <li className="nav-item">
                            <Link className="nav-link active" to="sale_records.html">All Records</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="sale_entry.html">New Entry</Link>
                        </li>
                    </ul>
                </div>
                {/* menu end */}

                <div className="sale">
                    <div className="container">
                        {/* print header */}
                        {/* <div className="print-show print-header">
                            <div className="d-flex">
                                <div>
                                    <h4>MaxSOP</h4>
                                    <h6>5B Green House, 27/2 Ram Babu Road, Mymensingh</h6>
                                    <p className="text-small"><strong>Phone:</strong>+880 1786 494650, +880 1786 494650</p>
                                </div>
                                <div className="ms-auto">
                                    <p>5 December, 2020</p>
                                </div>
                            </div>
                        </div> */}
                        <PrintHead />

                        
            
                        {/* table */}
                        <div className="card border-0">
                            <div className="card-header p-0 py-1 d-sm-flex d-block  align-items-center border-0">
                                {/* page title */}
                                <div className="mt-3 mb-2 print-none">
                                    <h4 className="main-title">Sale records</h4><br/>
                                    <small className="print-none">About 563,000,000 results (0.98 seconds)</small>
                                </div>
                                {/* Print */}
                                <Link to="#" className="btn top-icon-button print-none ms-auto" title="Print" onClick={ window.print }>
                                    <i className="bi bi-printer"></i>
                                </Link>
                                {/* refresh */}
                                <Link to="sale_records.html" className="btn top-icon-button print-none" title="Refresh">
                                    <i className="bi bi-arrow-clockwise"></i>
                                </Link>
                                {/* search */}
                                <Link to="#sale-search" 
                                className="btn top-icon-button print-none" 
                                title="Search" 
                                data-bs-toggle="collapse" 
                                role="button" aria-expanded="false"
                                >
                                    <i className="bi bi-search"></i>
                                </Link>
                                {/* add */}
                                <Link to="sale_entry.html" className="btn top-icon-button print-none" title="Creat new sale">
                                    <i className="bi bi-plus-circle"></i>
                                </Link>
                            </div>
                            {/* content body */}
                            <div className="card-body p-0">
                                {/* search collapse */}
                                <div className="collapse print-none" id="sale-search">
                                    <div className="card card-body rounded-0 border-0 px-0">
                                        {/* search form */}
                                        <form action="#">
                                            <div className="row g-3">
                                                {/* Date (from) */}
                                                <div className="col-12 col-sm-6 col-lg-2">
                                                    <label htmlFor="date-from" className="form-label">Date (from)</label>
                                                    <input type="date" name="#" className="form-control" id="date-from"/>
                                                </div>
                                                {/* Date (to) */}
                                                <div className="col-12 col-sm-6 col-lg-2">
                                                    <label htmlFor="date-to" className="form-label">Date (to)</label>
                                                    <input type="date" name="#" className="form-control" id="date-to"/>
                                                </div>
                                                {/* Customer Phone */}
                                                <div className="col-12 col-sm-6 col-lg-2">
                                                    <label htmlFor="customer-phone" className="form-label">Customer Phone</label>
                                                    <input type="text" name="#" className="form-control" id="customer-phone" placeholder="Enter phone"/>
                                                </div>
                                                {/* Invoice No */}
                                                <div className="col-12 col-sm-6 col-lg-2">
                                                    <label htmlFor="invoice-no" className="form-label">Invoice no</label>
                                                    <input type="text" name="#" className="form-control" id="invoice-no" placeholder="Enter phone"/>
                                                </div>
                                                {/* Salesman select  */}
                                                <div className="col-12 col-sm-6 col-lg-2">
                                                    <label htmlFor="salesman" className="form-label ">Salesman</label>
                                                    <select name="#" className="form-select" id="salesman">
                                                        <option value="">Select</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                {/* button */}
                                                <div className="col-12 col-sm-6 col-lg-2">
                                                    <label className="form-label">&nbsp;</label>
                                                    <button type="submit" className="btn btn-block w-100 custom-btn btn-success">Search</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="table-responsive-md">
                                    <table className="table custom-table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">SL</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Invoice No</th>
                                                <th scope="col">Customer</th>
                                                <th scope="col">Total</th>
                                                <th scope="col">Salesman</th>
                                                <th scope="col">Status</th>
                                                <th scope="col" className="text-end print-none">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">01.</th>
                                                <td>23 August, 2020</td>
                                                <td><Link to="#">INV0014</Link></td>
                                                <td>Akhter</td>
                                                <td>3,600.00</td>
                                                <td>Maxsop</td>
                                                <td><Link to="#" className="text-danger">Pending</Link></td>
                                                <td className="text-end print-none">
                                                    <Link to="sale_invoice.html" className="btn table-small-button" title="View">
                                                        <i className="bi bi-eye"></i>
                                                    </Link>
                                                    <Link to="sale_return.html" className="btn table-small-button" title="Return">
                                                        <i className="bi bi-arrow-counterclockwise"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">02.</th>
                                                <td>23 August, 2020</td>
                                                <td><Link to="#">INV0014</Link></td>
                                                <td>Akhter</td>
                                                <td>3,600.00</td>
                                                <td>Maxsop</td>
                                                <td><Link to="#" className="text-success">Delivered</Link></td>
                                                <td className="text-end print-none">
                                                    <Link to="sale_invoice.html" className="btn table-small-button" title="View">
                                                        <i className="bi bi-eye"></i>
                                                    </Link>
                                                    <Link to="sale_return.html" className="btn table-small-button" title="Return">
                                                        <i className="bi bi-arrow-counterclockwise"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">03.</th>
                                                <td>23 August, 2020</td>
                                                <td><Link to="#">INV0014</Link></td>
                                                <td>Akhter</td>
                                                <td>3,600.00</td>
                                                <td>Maxsop</td>
                                                <td><Link to="#" className="text-success">Delivered</Link></td>
                                                <td className="text-end print-none">
                                                    <Link to="sale_invoice.html" className="btn table-small-button" title="View">
                                                        <i className="bi bi-eye"></i>
                                                    </Link>
                                                    <Link to="sale_return.html" className="btn table-small-button" title="Return">
                                                        <i className="bi bi-arrow-counterclockwise"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">04.</th>
                                                <td>23 August, 2020</td>
                                                <td><Link to="#">INV0014</Link></td>
                                                <td>Akhter</td>
                                                <td>3,600.00</td>
                                                <td>Maxsop</td>
                                                <td><Link to="#" className="text-success">Delivered</Link></td>
                                                <td className="text-end print-none">
                                                    <Link to="sale_invoice.html" className="btn table-small-button" title="View">
                                                        <i className="bi bi-eye"></i>
                                                    </Link>
                                                    <Link to="sale_return.html" className="btn table-small-button" title="Return">
                                                        <i className="bi bi-arrow-counterclockwise"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">05.</th>
                                                <td>23 August, 2020</td>
                                                <td><Link to="#">INV0014</Link></td>
                                                <td>Akhter</td>
                                                <td>3,600.00</td>
                                                <td>Maxsop</td>
                                                <td><Link to="#" className="text-success">Delivered</Link></td>
                                                <td className="text-end print-none">
                                                    <Link to="sale_invoice.html" className="btn table-small-button" title="View">
                                                        <i className="bi bi-eye"></i>
                                                    </Link>
                                                    <Link to="sale_return.html" className="btn table-small-button" title="Return">
                                                        <i className="bi bi-arrow-counterclockwise"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* pagination */}
                            <div className="card-footer print-none">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination pagination-sm m-0  justify-content-end">
                                        <li className="page-item disabled"><Link className="page-link " to="#">
                                            <i className="bi bi-chevron-left"></i>
                                        </Link></li>
                                        <li className="page-item"><Link className="page-link page-link-active" to="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">
                                            <i className="bi bi-chevron-right"></i>
                                        </Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>User list</h3>
            </AppLayout>
        )
    }
}
