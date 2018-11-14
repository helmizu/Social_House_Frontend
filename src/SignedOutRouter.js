import React, { Component } from 'react';
import {createStackNavigator } from 'react-navigation';

//components
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';

const SignedOut = createStackNavigator({
    Login : {screen: Login},
    SignUp : {screen: SignUp}
})

export default SignedOut;