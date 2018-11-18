import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS} from '../types';
import axios from 'axios';

export const emailChanged = email => {
    return{
        type: EMAIL_CHANGED,
        payload : email,
    }
}

export const passwordChanged = password => {
    return{
        type: PASSWORD_CHANGED,
        payload : password,
    }
}

export const loginUser = (email,password, nav) => dispatch => {
    const dataUser = {email,password}
    axios.post(`http://192.168.0.100:3000/users/login`, dataUser )
    .then(res => {
        dispatch({type : LOGIN_SUCCESS, payload:res})
        nav('AuthLoading')
        console.log(res)
    })
    .catch(() => nav('AuthLoading'))
}; 
