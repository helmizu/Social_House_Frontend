import React, { Component } from 'react';
import { Button, View, Text, AsyncStorage } from 'react-native';

class Login extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Login Screen</Text>
                <Button
                    title="SignUp"
                    onPress={() => this.props.navigation.navigate('SignUp')}
                />
                <Button
                    title="Login"
                    onPress={this._signInAsync}
                />
            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('SignedIn')
    }
}

export default Login