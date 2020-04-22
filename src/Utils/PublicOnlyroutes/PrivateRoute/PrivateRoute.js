import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({component,...props}) {

    const Component = component

    render() {
        return (
           <Route
           {...props}

           render={componentProps => (
               
           )}

           />
        )
    }
}

export default PrivateRoute
