import axios from 'axios';
import * as types from './actionTypes';
import { apiURL } from '../../_helpers/urls';

export const register = user => dispatch => {
    dispatch({
        type: types.REGISTER_REQUEST
    });
    axios
        .post(`${apiURL}/auth/register`, user)
        .then(res => {
            dispatch({
                type: types.REGISTER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: types.REGISTER_FAILURE
            });
        }
};


