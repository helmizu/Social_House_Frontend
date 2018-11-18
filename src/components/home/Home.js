import React, { Component } from 'react';
import { Button, Image, View, Text, AsyncStorage, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import profile from '../../assets/27.png';
import coin from '../../assets/images/coin.png';
import { Post } from '../Common';

class Home extends Component {
    static navigationOptions = {
        title: 'Profil',
    };

    constructor(props) {
        super(props)

        this.state = {
            navigation: 'thread'
        }
    }

    render() {
        const now = new Date().toLocaleTimeString()
        return (
            <ScrollView style={styles.container}>
                <View style={styles.profileContainer}>
                    <View style={{ marginTop: 24, alignItems: 'center' }}>
                        <Image style={styles.img} source={profile} />
                    </View>
                    <View style={{ alignItems: 'center', marginLeft: 64, marginRight: 64 }}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16, color: '#656766' }}>Muhammad Ilham Fajar</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginLeft: 64, marginRight: 64, marginTop: 8, marginBottom: 8 }}>
                        <Text style={{ textAlign: 'center', fontSize: 14, color: '#B4B4B4' }}>@muh_ilhamfajar</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginLeft: 64, marginRight: 64 }}>
                        <Text style={{ textAlign: 'center' }}>lorem ipsum lorep ipsum lorem ipsum lorep ipsum lorem ipsum lorep ipsum lorem ipsum lorep </Text>
                    </View>
                    <View style={{ marginTop: 16, alignItems: 'center', marginBottom: 36 }}>
                        <TouchableOpacity style={{ borderRadius: 30, width: 100, borderWidth: 2, borderColor: '#D4D4D4' }}>
                            <Text style={{ textAlign: 'center', padding: 8 }}>Edit Profile</Text>
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
                    {this.state.navigation == 'thread'
                        ?
                        <View>
                            <Post profile={profile} name="Helmi" date={now} post="Content post" navigation={this.props.navigation} />
                            <Post profile={profile} name="Helmi" date={now} post="Content post" navigation={this.props.navigation} />
                            <Post profile={profile} name="Helmi" date={now} post="Content post" navigation={this.props.navigation} />
                        </View>
                        : this.state.navigation == 'dashboard'
                            ?
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 32 }}>
                                <Text style={{ textAlign: 'center' }}>Maaf, anda belum memiliki program apapun</Text>
                                <TouchableOpacity style={{ backgroundColor: '#42A7F3', marginTop: 24, paddingVertical: 12, borderRadius: 4, minWidth: 328, alignItems: 'center' }}>
                                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Ikut Program</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={{paddingHorizontal:24, marginTop: 24}}>
                                <View style={{flexDirection:'row', marginBottom: 36}}>
                                    <Image source={coin} />
                                    <View style={{paddingRight:24, marginLeft: 8}}>
                                        <Text style={{fontWeight: '600'}}>Penabung Ulung</Text>
                                        <Text>Kamu berhasil menabung sejumlah Rp. 500.000</Text>
                                    </View>
                                </View>
                                
                                <View style={{flexDirection:'row', marginBottom: 36}}>
                                    <Image source={coin} />
                                    <View style={{paddingRight:24, marginLeft: 8}}>
                                        <Text style={{fontWeight: '600'}}>Penabung Ulung</Text>
                                        <Text>Kamu berhasil menabung sejumlah Rp. 500.000</Text>
                                    </View>
                                </View>

                                <View style={{flexDirection:'row', marginBottom: 36}}>
                                    <Image source={coin} />
                                    <View style={{paddingRight:24, marginLeft: 8}}>
                                        <Text style={{fontWeight: '600'}}>Penabung Ulung</Text>
                                        <Text>Kamu berhasil menabung sejumlah Rp. 500.000</Text>
                                    </View>
                                </View>
                            </View>
                        // <View style={{marginTop:24, paddingLeft:36, paddingRight:36, flexDirection:'row', flexWrap: 'wrap'}}>
                        //     <View style={{width: 64, height:64, backgroundColor:'#C4C4C4', borderRadius:4, marginRight: 32, marginBottom: 32}}></View>
                        //     <View style={{width: 64, height:64, backgroundColor:'#C4C4C4', borderRadius:4, marginRight: 32, marginBottom: 32}}></View>
                        // </View>

                    }

                </View>
            </ScrollView>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('SignedOut');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 8,
        backgroundColor: '#fff'
    },

    //profile

    profileContainer: {
        flex: 3,
        flexDirection: 'column'
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    viewContainer: {
        flex: 2,
        flexDirection: 'column'
    },
    nav: {
        flex: 1 / 0,
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