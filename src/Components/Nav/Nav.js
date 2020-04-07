import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
   
        return (
            <div>
               <Link to="/"><li>Home</li> </Link>
               <Link to="/login"><li>login</li></Link>
               <Link to="/profile"><li>profile</li></Link>
            </div>
        )
    }


export default Nav
