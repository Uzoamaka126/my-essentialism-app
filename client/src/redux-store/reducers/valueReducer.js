import * as types from '../actions/actionTypes';

const initialState = {
    values: [],
    isFetching: false,
    error: ''
};

export const valueReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_VALUES: 
            return {
                ...state,
                isFetching: true 
            }
        case types.GET_VALUES_SUCCESS:
            return {
                ...state,
                values: action.payload,
                isFetching: false,
                error: ''
            }
        case types.GET_VALUES_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
    }
}