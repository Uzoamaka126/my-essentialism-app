import { authReducer } from './authReducer';
import { valueReducer } from './valueReducer';
import { combineReducers } from 'redux';
export const rootReducer = combineReducers({
    auth: authReducer,
    values: valueReducer
})