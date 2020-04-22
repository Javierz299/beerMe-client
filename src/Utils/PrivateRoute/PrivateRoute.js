import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../../Services/token-service'

function PrivateRoute({component,...props}) {
    const Component = component
   
        return (
           <Route 
           {...props}
           render={componentProps => (
            TokenService.hasAuthtoken() ?
            <Redirect to="/profile"/> && <Component {...componentProps} /> : <Redirect to="/login" />
            
           )}
           />
        )
}

export default PrivateRoute
