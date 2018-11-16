import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS } from '../types';
import {AsyncStorage} from 'react-native';

const initialState = {
    email: '',
    password: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case LOGIN_SUCCESS:
            return {...state}
        default:
            return state
    }
}