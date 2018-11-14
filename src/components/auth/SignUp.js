import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class SignUp extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Signup Screen</Text>
                <Button
                    title="SignUp"
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        );
    }
}

export default SignUp