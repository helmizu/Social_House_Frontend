import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Dashboard')}
                />
            </View>
        );
    }
}

export default Home