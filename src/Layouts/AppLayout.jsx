import React, { Component } from 'react'
import Aside from '../components/Aside'
import Navigation from '../components/Navigation'
import { Link } from 'react-router-dom'

class AppLayout extends Component {

    constructor(props) {
        super(props);

        const date = new Date();

        // state
        this.state = {
            isSidebarOpen: true,
            year: date.getFullYear()
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
                {/* aside component */}
                <Aside isAsideOpen={ this.state.isSidebarOpen } closeSidebar={ this.toggleSidebarHandler } />
                {/* aside component end */}

                {/* main container */}
                <div className={ `mainbar ${ this.state.isSidebarOpen ? '' : 'expand' }` }>
                    <header>
                        {/* navbar */}
                        <Navigation toggleSidebar={ this.toggleSidebarHandler } />
                        {/* navbar end */}
                    </header>

                    {/* content */}
                    <section className="container">
                        { this.props.children }
                    </section>
                    {/* content end */}

                    {/* footer */}
                    <footer className="container-fluid">
                        <div className="d-flex justify-content-between py-2">
                            <small>
                                &copy; Copyright { this.state.year } | All Rights reserved by <Link to="https://shohozsales.com" target="_blank">Shohoz Sales</Link>
                            </small>

                            <small>Version 1.0.0</small>
                        </div>
                    </footer>
                    {/* footer end */}
                </div>
                {/* main container end */}
            </>
        )
    }
}

export default AppLayout;
