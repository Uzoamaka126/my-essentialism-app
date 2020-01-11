import React from 'react';
// import { Redirect, Route, withRouter } from 'react-router-dom';
import * as types from '../redux-store/actions/actionTypes';
import { isTokenExpired } from './checkForToken';
export const setToken = store => next => action => {
    if(action.type === types.REGISTER_SUCCESS || action.type === types.LOGIN_SUCCESS) {
        localStorage.setItem('token', action.payload);
        localStorage.setItem('user', JSON.stringify(action.user))
    }
    next(action)
}

export const getToken = () => {
    try {
        const token = localStorage.getItem('token');
        if(token === null) {
            return undefined;
        } else {
            const isExpired = isTokenExpired(token)
            // check if the token is expired above
            if(isExpired) {
                clearLocalStorage();
                return undefined;
            }
        }
        return token;
    } catch {
        return undefined;
    }
}

// Define a function to clear the local storage 
export const clearLocalStorage = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
};