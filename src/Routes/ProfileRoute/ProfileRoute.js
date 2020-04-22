import React, { Component } from 'react'
import config from '../../config/config'
import TokenService from '../../Services/token-service'
import ProfilePage from '../../Components/ProfilePage/ProfilePage'
import LoginPage from '.././LoginPage/LoginPage'

class ProfileRoute extends Component {
    constructor(props){
        super(props)
            
           this.state = {
                alcohol: []
            }
        
    }
   

    setAlcoholCount = count => {
        this.setState({
            alcohol: count
        })
    }
    

    componentDidMount(){
        console.log(this.props)
    }



    render() {
        return (
            <div>
               
            <ProfilePage />
        
                
            </div>
        )
    }
}

export default ProfileRoute
