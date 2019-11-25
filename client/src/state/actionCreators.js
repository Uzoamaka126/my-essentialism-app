import Axios from 'axios';
import * as types from './actionTypes';

Axios.defaults.baseURL = 'https://my-essentialism-app.herokuapp.com/api/users';

export const newValue = (value) => {
    return {
        type: types.ADD_NEW_USER_VALUE,
        payload: value
    }
}

export const newProject = (project) => {
    return {
        type: types.ADD_NEW_USER_PROJECT,
        payload: project
    }
}


export const getValues = () => dispatch => {
    Axios.  ('/values')
        .then(res => {
            dispatch({
                type: types.GET_VALUES_SUCCESS,
                payload: res.data.values
            })
        })
        .catch
}