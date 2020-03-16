import React from 'react'
import { Route, Redirect } from 'react-router-dom';
// import Auth from './Auth.js'
/* Custom Routes */

/* 
- if user is not logged in
- access to SignInPage & SignUpPage 
- deny access to UserPage
- or redirect to SignInPage 
*/
export const RouteAuthenticate = (
    { auth , setAuth , query , component:Component , ...rest }
) => {
    const Comp = (props) => {
        // console.log('Auth Props:' , props , auth)
        return (!auth)
        ? (
            <Component 
                { ...rest } 
                { ...props }
                auth={ auth }
                setAuth={ setAuth }
            />
        )
        : (
            <Redirect 
                to={ `/user${ query }` } 
            />
        );
    };

    return (
        <Route 
            { ...rest } 
            render={ Comp } 
        />
    );
}

/* 
- if current user is logged in 
- access to UserPage
- deny access to SignInPage & SignUpPage
- redirect to UserPage
*/
export const RouteProtected = (
    { auth , setAuth , component:Component , ...rest }
) => {
    const Comp = (props) => {
        // console.log('Prot Props:' , props , auth)
        return ( auth )
        ? (
            <Component 
                { ...rest }
                { ...props }
                setAuth={ setAuth }
            />
        )
        : (
            <Redirect 
                to={ `/` } 
            />
        );
    };

    return (
        <Route 
            { ...rest } 
            render={ Comp } 
        />
    );
}