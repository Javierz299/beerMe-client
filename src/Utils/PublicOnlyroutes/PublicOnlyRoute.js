import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../../Services/token-service'


function PublicOnlyRoute({component, ...props}){
    console.log("props",props)
    console.log("component",component)
    const Component = component
   
        return (
            <Route 
            {...props}
            render={componentProps => (
                TokenService.hasAuthtoken() ? 
                <Redirect to={"/"}/> : 
                <Component {...componentProps} />
            )}
            />
        )
    
}

export default PublicOnlyRoute
