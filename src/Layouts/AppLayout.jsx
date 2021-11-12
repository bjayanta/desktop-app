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
            <div className="relative min-h-screen md:flex">
                {/* asidebar for mobile */}
                {/* <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
                    <Link to="#" className="text-white flex items-center px-4 space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z"/>
                        </svg>

                        <span className="text-2xl font-extrabold">MaxSOP</span>
                    </Link>

                    <button className="p-4 focus:bg-gray-700" onClick={ this.toggleSidebarHandler }>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div> */}

                {/* asidebar */}
                <aside className={ asideClass.join(' ') }>
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
