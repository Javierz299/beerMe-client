import React, { Component } from 'react'
import SignUpForm from '../../Components/SignUpForm/SignUpForm'

class SignUpPage extends Component {

    handleSignUpSuccess = () => {
        console.log('reached')
        const { history } = this.props
        history.push("/login")
    }
    render() {
        return (
            <div>
                <SignUpForm onSignUpSuccess={this.handleSignUpSuccess}/>
            </div>
        )
    }
}

export default SignUpPage
