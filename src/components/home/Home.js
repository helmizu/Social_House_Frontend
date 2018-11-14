import React, { Component } from 'react';
import { Button, View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Dashboard')}
                />
                 <Button
                    title="Logout"
                    onPress={this._signOutAsync}
                />
            </View>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('SignedOut');
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps)(Home)