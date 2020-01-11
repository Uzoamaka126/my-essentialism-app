import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest}) => {
    return (
        <Route 
        // we could say exact={exact} path={path}..
        // instead we will spread everything inside the route so that we have access to all other properties that a Router has
            {...rest}  
            render={() => {
                if (localStorage.getItem('token')) {
                    // if token is in local storage, render component
                    return <Component />
                } else {
                    return <Redirect to="/login" />
                }
            }}
        />
    )
}
export default PrivateRoute;