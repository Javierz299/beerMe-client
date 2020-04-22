import React, { Component } from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'
import UserApiService from '../../Services/user-api-service'
import config from '../../config/config'
import ProfileRoute from '../../Routes/ProfileRoute/ProfileRoute'
import TokenService from '../../Services/token-service'
import '../LoginPage/LoginPage.css'
import ProfilePage from '../../Components/ProfilePage/ProfilePage'

class LoginPage extends Component {
   

    
  alcoholCount = async (info) =>  {
      //console.log(await info)
     let waitingCount = await info
     console.log(waitingCount)
      return await waitingCount
   }
   
   
    

    handleLoginSuccess = (user_id) => {
        const { history } = this.props
        history.push(`/`)

        fetch(`${config.API_ENPOINT}/alcohol/${user_id}/MyCount`, {
            method: 'GET',
            headers: {
              authorization : `bearer ${TokenService.getAuthToken()}`,
            }
          })
          .then(res => res)
          .then(res => this.alcoholRes(res.json()))
        
        
    }

    render() {
        return (
            <div id="login-form-container">
                <LoginForm alcoholCount={this.alcoholCount}/>
                <ProfileRoute alcoholCount={this.alcoholCount}/>
            </div>
        )
    }
}

export default LoginPage
