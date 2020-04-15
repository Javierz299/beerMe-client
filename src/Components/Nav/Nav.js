import React from 'react'
import { Link } from 'react-router-dom'
import '../Nav/Nav.css'

function Nav() {
   
        return (
            <div className="nav-links">
               <Link to="/"><li>Home</li> </Link>
               <Link to="/login"><li>login</li></Link>
               <Link to="/profile"><li>profile</li></Link>
            </div>
        )
    }


export default Nav
