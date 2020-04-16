import React, { Component } from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'
import '../LoginPage/LoginPage.css'

class LoginPage extends Component {

    handleLoginSuccess = () => {
       
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/' 
        history.push(destination)
    }

    render() {
        return (
            <div id="login-form-container">
                <LoginForm 
                    onLoginSuccess={this.handleLoginSuccess}
                />
            </div>
        )
    }
}

export default LoginPage
