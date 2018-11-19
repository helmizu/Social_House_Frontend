import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, GENDER_CHANGED, DATE_CHANGED, NAME_CHANGED, CONFIRM_CHANGED, USERNAME_CHANGED } from '../types';
import axios from 'axios';

export const emailChanged = email => {
    return {
        type: EMAIL_CHANGED,
        payload: email,
    }
}

export const passwordChanged = password => {
    return {
        type: PASSWORD_CHANGED,
        payload: password,
    }
}

export const genderChanged = gender => {
    return {
        type: GENDER_CHANGED,
        payload: gender,
    }
}

export const dateChanged = date => {
    return {
        type: DATE_CHANGED,
        payload: date,
    }
}

export const nameChanged = name => {
    return {
        type: NAME_CHANGED,
        payload: name,
    }
}

export const confirmChanged = confirm => {
    return {
        type: CONFIRM_CHANGED,
        payload: confirm,
    }
}

export const usernameChanged = username => {
    return {
        type: USERNAME_CHANGED,
        payload: username,
    }
}

export const loginUser = (email, password, nav) => dispatch => {
    const dataUser = { email, password }
    axios.post(`http://192.168.43.25:3000/users/login`, dataUser)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res })
            nav('AuthLoading')
            console.log(res)
        })
        .catch(() => nav('AuthLoading'))
};

export const signupUser = (email, password, gender, date, name, confirm, username, nav) => dispatch => {
    const dataUser = { email, password, gender, date, name, confirm, username}
    axios.post(`http://192.168.43.25:3000/users/register`, dataUser)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res })
            nav('Login')
            console.log(res)
        })
        .catch(() => nav('Login'))
}