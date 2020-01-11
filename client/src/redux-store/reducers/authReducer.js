import * as types from '../actions/actionTypes';

const initialState = {
    user: null,
    isLoading: false,
    register_error: false,
    register_success: false,
    login_error: false,
    login_success: false,
    verification_error: false,
    verification_success: false
};

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.VERIFICATION_START:
            return {
                ...state,
                isLoading: true
            }
        case types.VERIFICATION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                verification_success: true,
                user: action.payload
            }
        case types.VERIFICATION_FAILURE:
            return {
                ...state,
                isLoading: false,
                verification_error: true,
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                login_success: true,
                user: action.user
            }
        case types.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                login_error: true,
            }
        case types.REGISTER_REQUEST: 
            return {
                ...state,
                isLoading: true
            }
        case types.REGISTER_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                register_success: true
            }
        case types.REGISTER_FAILURE:
            return {
                ...state,
                isLoading: false,
                register_success: false,
                register_error: true
            }
        default:
            return state;
    }
}