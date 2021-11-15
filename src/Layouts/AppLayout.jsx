import React, { Component } from 'react'
import Aside from '../components/Aside'
import Navigation from '../components/Navigation'

class AppLayout extends Component {

    constructor(props) {
        super(props);

        // state
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
                    <div className="container">
                        <h1>Dashboard</h1>
                        { this.props.children }
                    </div>
                    {/* content end */}
                </div>
                {/* main container end */}
            </>
        )
    }
}

export default AppLayout;
