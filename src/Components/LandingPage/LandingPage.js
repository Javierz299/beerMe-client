import React, { Component }from 'react'
import { Link } from 'react-router-dom'
class LandingPage extends Component {

    
    
    render(){
        return (
            <div id="landing-page">{/*add sign up page to landing page?*/}
                <Link to="/sign-up"><li className="sign-up-link">Sign Up</li></Link>
                <h1>Landing Page</h1>
                <p>You ever wonder how much you or your friend drinks on a daily basis? or how much alcohol you have consumed in the past month?</p>
                <p>Well now you can keep track and log each alcoholic drink you consume. Just sign up and start logging. The application will keep track of your daily, weekly, monthly and yearly intake. And compare against your friends.</p>
            </div>
        )
    }
}

export default LandingPage
