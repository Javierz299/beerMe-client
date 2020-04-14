import React, { Component } from 'react'
import AuthApiService from '../../Services/auth-api-service'

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
            first_name.value = ""
            last_name.value = ""
            username.value = ""
            password.value = ""
            this.props.onSignUpSuccess()
        })
        .catch(res => {
            this.setState({ error: res.error})
        })

    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                <legend>Sign Up</legend>
           
             <div>
                <label htmlFor="first_name">First Name:</label>
                <input required id="first_name" name="first_name" placeholder="first name"/>
            </div>
            <div>
                <label htmlFor="last_name">Last Name:</label>
                <input required id="last_name" name="last_name" placeholder="last name"/>
            </div>
            <div>
                <label>Username:</label>
                <input required id="username" name="username" placeholder="username" />
            </div>
            <div>
                <label htmlFor="password" >Password:</label>
                <input required id="password" name="password" placeholder="password" />
            </div>
            <button type="submit">Submit</button>
                </fieldset>
            </form>
        )
    }
}

export default SignUpForm
