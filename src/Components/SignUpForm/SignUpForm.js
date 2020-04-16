import React, { Component } from 'react'
import AuthApiService from '../../Services/auth-api-service'
import '../SignUpForm/SignUpForm.css'


class SignUpForm extends Component {
    state = {
        error: null
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { first_name, last_name, username, password } = e.target

        AuthApiService.postUser({
            first_name: first_name.value,
            last_name: last_name.value,
            username: username.value,
            password: password.value
        })
        .then(res => {
            if(res.error){
                this.setState({error: res.error})
            } else {
            first_name.value = ""
            last_name.value = ""
            username.value = ""
            password.value = ""
            this.props.onSignUpSuccess()
            }
        })

    }


    render() {
        const { error } = this.state
        return (
            <div className="signup-form-container">
            <form id="sign-up-form" onSubmit={this.handleSubmit}>
                <fieldset>
                <legend>Sign Up</legend>
                
            <div>{error && <p>{error}</p> }</div>
           
             <div className="sign-up-inputs">
                <label htmlFor="first_name">First Name:</label>
                <input required id="first_name" name="first_name" placeholder="first name"/>
            </div>
            <div className="sign-up-inputs">
                <label htmlFor="last_name">Last Name:</label>
                <input required id="last_name" name="last_name" placeholder="last name"/>
            </div>
            <div className="sign-up-inputs">
                <label>Username:</label>
                <input required id="username" name="username" placeholder="username" />
            </div>
            <div className="sign-up-inputs">
                <label htmlFor="password" >Password:</label>
                <input required id="password" name="password" placeholder="password" />
            </div>
            <button type="submit">Submit</button>
                </fieldset>
            </form>
            </div>
        )
    }
}

export default SignUpForm
