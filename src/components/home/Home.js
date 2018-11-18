import React, { Component } from 'react';
import { Button, Image, View, Text, AsyncStorage, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import profile from '../../assets/27.png'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            navigation: 'thread'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <View style={{marginTop: 24, alignItems: 'center'}}>
                        <Image style={styles.img} source={profile} />
                    </View>
                    <View style={{alignItems: 'center',marginLeft: 64, marginRight: 64}}>
                        <Text style={{textAlign: 'center', fontWeight:'bold', fontSize: 16, color: '#656766'}}>Muhammad Ilham Fajar</Text>
                    </View>
                    <View style={{alignItems: 'center',marginLeft: 64, marginRight: 64, marginTop:8, marginBottom: 8}}>
                        <Text style={{textAlign: 'center', fontSize: 14, color: '#B4B4B4'}}>@muh_ilhamfajar</Text>
                    </View>
                    <View style={{alignItems: 'center',marginLeft: 64, marginRight: 64}}>
                        <Text style={{textAlign: 'center'}}>lorem ipsum lorep ipsum lorem ipsum lorep ipsum lorem ipsum lorep ipsum lorem ipsum lorep </Text>
                    </View>
                    <View style={{marginTop: 16, alignItems: 'center'}}>
                        <TouchableOpacity style={{borderRadius: 30, width: 100,borderWidth: 2, borderColor: '#D4D4D4'}}>
                            <Text style={{textAlign:'center', padding: 8}}>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <View>
                    <Button
                        title="Go to Details"
                        onPress={() => this.props.navigation.navigate('Dashboard')}
                    />
                    <Button
                        title="Logout"
                        onPress={this._signOutAsync}
                    />
                </View> */}
                <View style={styles.viewContainer}>
                    <View style={styles.nav}>
                        <View style={styles.buttonNav} >
                            <TouchableOpacity
                                style={this.state.navigation == 'thread' ? styles.buttonStyleActive : styles.buttonStyle}
                                onPress={() => this.setState({ navigation: 'thread' })}
                            >
                                <Text style={styles.buttonText}>thread</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonNav} >
                            <TouchableOpacity
                                style={this.state.navigation == 'dashboard' ? styles.buttonStyleActive : styles.buttonStyle}
                                onPress={() => this.setState({ navigation: 'dashboard' })}
                            >
                                <Text style={styles.buttonText}>dashboard</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonNav} >
                            <TouchableOpacity
                                style={this.state.navigation == 'achievements' ? styles.buttonStyleActive : styles.buttonStyle}
                                onPress={() => this.setState({ navigation: 'achievements' })}
                            >
                                <Text style={styles.buttonText}>Achievements</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{marginTop: 32}}>{this.state.navigation}</Text>
                </View>
            </View>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('SignedOut');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 8
    },

    //profile

    profileContainer: {
        flex: 3,
        flexDirection: 'column'
    },
    img: {
        width: 100,
        height: 100,
        borderRadius:100
    },
    viewContainer: {
        flex: 2,
        flexDirection: 'column'
    },
    nav: {
        flex: 1/0,
        flexDirection: 'row'
    },
    buttonNav: {
        flex: 1
    },
    buttonStyleActive: {
        borderWidth: 0,
        borderBottomWidth: 2,
        borderColor: '#3FA4F0',
        textAlign: 'center'
    },
    buttonStyle: {
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#C4C4C4"
    },
    buttonText: {
        textAlign: 'center',
        paddingBottom: 4
    }
});

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps)(Home)