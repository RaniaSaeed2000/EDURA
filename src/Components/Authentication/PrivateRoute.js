import React from 'react'
import {Route , Redirect} from 'react-router-dom'
import { useAuth } from '../Context/AuthContexts'




//this component to direct to the login page after logout
export default function PrivateRoute( {component : Component , ...rest }) {
    // (...rest) :  otherwise all of the properties are going to be here 
    
    const {currentUser} = useAuth()
    return (
        // render take props and it check if there is  current user
        <Route {...rest} 
        render={props =>{  
            //if there is not currentUser  redirect to login page
          return( currentUser ? <Component {...props} /> : <Redirect to="/login"/>) 
        }}/>
    )
}
  