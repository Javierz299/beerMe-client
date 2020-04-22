import React, { Component } from 'react'
import AuthApiService from '../../Services/auth-api-service'
import TokenService from '../../Services/token-service'
import config from '../../config/config'

import '../LoginForm/LoginForm.css'

class LoginForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            error: null
        }
    }
    

    
    handleLoginSuccess = (user_id) => {
        console.log(this.props)
        const { history } = this.props
        history.push(`/`)

        fetch(`${config.API_ENPOINT}/alcohol/${user_id}/MyCount`, {
            method: 'GET',
            headers: {
              authorization : `bearer ${TokenService.getAuthToken()}`,
            }
          })
          .then(res => res)
          .then(res => this.props.alcoholCount(res.json()))
        
        
    }


    handleSubmit = (e) => {
        e.preventDefault()
        
        const { username, user_password } = e.target
            console.log(username.value,user_password.value)
        
        AuthApiService.postLogin({
            username: username.value,
            password: user_password.value
        })
        .then(res => {
            if(res.error){
                console.log('error reached')
                this.setState({error: res.error})
            } else {
                TokenService.saveAuthToken(res.authToken)
                this.handleLoginSuccess(res.user_id)
            }
            
        })
        
    }

    render() {
        const { error } = this.state
        return (
            <form id="Login-Form" onSubmit={this.handleSubmit}>
                <div className="login-form-inputs">
                  {error && (<p> {error} </p>)}
                </div>
                <div className="login-form-inputs">
                    <label htmlFor="Login_User_Name">User Name:</label>
                    <input required name="username" id="Login_User_Name" placeholder="username" />
                </div>
                <div className="login-form-inputs">
                    <label htmlFor="Login_User_Password">Password:</label>                  {/*   type="password" */}
                    <input required name="user_password" id="Login_User_Password" placeholder="password"  />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>

            </form>
        )
    }
}

export default LoginForm
