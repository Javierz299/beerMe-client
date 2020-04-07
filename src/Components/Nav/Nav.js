import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
   
        return (
            <div>
               <Link to="/"><li>Home</li> </Link>
               <Link to="/loginPage"><li>login</li></Link>
               <Link to="/profilePage"><li>profile</li></Link>
            </div>
        )
    }


export default Nav
