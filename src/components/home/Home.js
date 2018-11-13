import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{this.props.isLoggedIn}</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Dashboard')}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps)(Home)