import React, { Component } from 'react'
import Aside from '../pages/partials/Aside'
import Navigation from '../pages/partials/Navigation'
// import { Link } from 'react-router-dom'

class AppLayout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSidebarActive: true
        };
    }

    toggleSidebarHandler = () => {
        this.setState({
            isSidebarActive: !this.state.isSidebarActive
        });
    }

    render() {
        let asideClass = ["bg-blue-800 text-blue-100 w-64 px-2 py-4 space-y-6 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out"];

        if (this.state.isSidebarActive) {
            asideClass.push("-translate-x-full");
        }

        return (
            <div className="bg-gray-50 relative min-h-screen md:flex">
                {/* asidebar */}
                <aside className={ `${ asideClass.join(' ')} z-50` }>
                    <Aside />
                </aside>
                
                {/* content */}
                <section className="flex-1">
                    <Navigation toggleAsideEvent={ this.toggleSidebarHandler } />

                    <main className="p-10">
                        { this.props.children }
                    </main>
                </section>
            </div>
        )
    }
}

export default AppLayout;
