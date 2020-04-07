import React, { Component } from 'react'
import AuthApiService from '../../Services/auth-api-service'
import TokenService from '../../Services/token-service'

class LoginForm extends Component {
    state = {
        error: null
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { username, user_password } = e.target
            console.log(username.value,user_password.value)
        
            AuthApiService.postLogin({
            username: username.value,
            password: user_password.value
        })
        .then( res => { 
            username.value = ""
            user_password.value = ""
            TokenService.saveAuthToken(res.authToken)
            this.props.onLoginSuccess()
        })
        .catch(res => {
            this.setState({ error: res.error})
        })
    }

    render() {
        const { error } = this.state
        return (
            <form id="LoginForm" onSubmit={this.handleSubmit}>
                <div>
                  {error && (<p> {error} </p>)}
                </div>
                <div>
                    <label htmlFor="Login_User_Name">User Name:</label>
                    <input required name="username" id="Login_User_Name" placeholder="username" />
                </div>
                <div>
                    <label htmlFor="Login_User_Password">Password:</label>
                    <input required name="user_password" id="Login_User_Password" placeholder="password" type="password"/>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>

            </form>
        )
    }
}

export default LoginForm
