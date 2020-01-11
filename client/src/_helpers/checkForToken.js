import decode from 'jwt-decode';
import { getToken } from './authenticationChecker';

export const decodeToken = () => {
    const token = getToken();
    const info = token ? decode(token) : null;
    return info;
};

export const isTokenExpired = token => {
    try {
        const decoded = decode(token);
        if(decoded.exp < Date.now() / 1000) {
            return true;
        } else return false
    } catch(error) {
        console.log(error);
        return false;
    }
};
