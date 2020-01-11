import axios from 'axios';
import * as types from './actionTypes';

// axios.defaults.baseURL = 'https://my-essentialism-app.herokuapp.com/api/users';
// export const newValue = (value) => {
//     return {
//         type: types.ADD_NEW_USER_VALUE,
//         payload: value
//     }
// }


// export const newProject = (project) => {
//     return {
//         type: types.ADD_NEW_USER_PROJECT,
//         payload: project
//     }
// }

// https://my-essentialism-app.herokuapp.com/
export const getValues = () => dispatch => {
    axios.get("https://my-essentialism-app.herokuapp.com/api/values")
      .then(res => {
        dispatch({
          type: types.GET_VALUES_SUCCESS,
          payload: res.data.values
        });
      })
      .catch(err =>
        dispatch({
          type: types.GET_VALUES_FAILURE,
          payload: err.message
        })
      );
  };