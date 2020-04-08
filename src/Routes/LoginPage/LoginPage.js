import React, { Component } from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'

class LoginPage extends Component {

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/' 
        history.push(destination)
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
