import React, { Component }from 'react'
import { Link } from 'react-router-dom'
class LandingPage extends Component {

    
    
    render(){
        return (
            <div>{/*add sign up page to landing page?*/}
                <Link to="/sign-up"><li>Sign Up</li></Link>
                <h1>Landing Page</h1>
            </div>
        )
    }
}

export default LandingPage
