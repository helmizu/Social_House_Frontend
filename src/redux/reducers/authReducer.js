import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS } from '../types';
import { AsyncStorage } from 'react-native';

const initialState = {
    email: '',
    password: '',
    token : null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case LOGIN_SUCCESS:
            if (action.payload.data.token) {
                AsyncStorage.setItem('token', action.payload.data.token);
            }
            return { ...state, token : action.payload.data.token}
        default:
            return state
    }
}