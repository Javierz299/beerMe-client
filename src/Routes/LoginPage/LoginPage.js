import React, { Component } from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'

export class LoginPage extends Component {

    handleLoginSuccess = () => {
        console.log('Reached')
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <LoginForm 
                    onLoginSuccess={this.handleLoginSuccess}
                />
            </div>
        )
    }
}

export default LoginPage
