import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, GENDER_CHANGED, DATE_CHANGED, NAME_CHANGED, CONFIRM_CHANGED, USERNAME_CHANGED} from '../types';
import { AsyncStorage } from 'react-native';

const initialState = {
    email: '',
    password: '',
    token : null,
    gender: '',
    date : '',
    name: '',
    confirm: '',
    username: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case GENDER_CHANGED:
            return { ...state, gender: action.payload }
        case DATE_CHANGED:
            return { ...state, date: action.payload.toString().substr(4, 12)}
        case NAME_CHANGED:
            return { ...state, name: action.payload }
        case CONFIRM_CHANGED:
            return { ...state, confirm: action.payload }
        case USERNAME_CHANGED:
            return { ...state, username: action.payload }
        case LOGIN_SUCCESS:
            if (action.payload.data.token) {
                AsyncStorage.setItem('token', action.payload.data.token);
            }
            return { ...state, token : action.payload.data.token}
        default:
            return state
    }
}