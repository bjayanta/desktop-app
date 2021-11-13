import React, { Component } from 'react'

export default class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.container = React.createRef();

        this.state = {
            isOpen: false
        }

    }

    componentDidMount() {
        if(this.props.open === 'true') {
            this.setState({
                isOpen: true
            });
        }

        document.addEventListener("click", this.clickOutsideHandler, true);
    }

    componentWillUnmount() {
        document.addEventListener("click", this.clickOutsideHandler, true);
    }

    dropdownHandler = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    clickOutsideHandler = (event) => {
        if(this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                isOpen: false
            });
        }
    }

    render() {
        
        return (
            <div className="relative" ref={ this.container }>
                {/* clickable button */}
                <button onClick={ this.dropdownHandler } className={ this.props.addClass }>
                    { this.props.title } 
                </button>

                {/* list */}
                {this.state.isOpen && (<>{ this.props.children }</>)}
            </div>
        )
    }
}
