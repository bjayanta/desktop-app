import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import AppLayout from '../../../layouts/AppLayout'

class Form extends Component {
    render() {
        console.log(this.props);

        return (
            <AppLayout>
                <h3>User form</h3>
                { this.props.match.params.id }
            </AppLayout>
        )
    }
}

export default withRouter(Form);
