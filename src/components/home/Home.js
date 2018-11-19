import React, { Component } from 'react';
import { Alert, Image, View, Text, AsyncStorage, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Modal } from 'react-native';
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
            navigation: 'thread',
            modal: false,
            program : []
        }
    }

    setModalVisible(visible) {
        this.setState({ modal: visible });
    }

    render() {
        const now = new Date().toLocaleTimeString();
        const dimenH = Dimensions.get('screen').height;
        const dimenW = Dimensions.get('window').width;
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
                        <TouchableOpacity onPress={this._signOutAsync} style={{ borderRadius: 30, width: 100, borderWidth: 2, borderColor: '#D4D4D4' }}>
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
                                <Text style={styles.buttonText}>Thread</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonNav} >
                            <TouchableOpacity
                                style={this.state.navigation == 'dashboard' ? styles.buttonStyleActive : styles.buttonStyle}
                                onPress={() => this.setState({ navigation: 'dashboard' })}
                            >
                                <Text style={styles.buttonText}>Dashboard</Text>
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
                            <Post profile={profile} name="Muhammad Ilham Fajar" date={now} post="Post ke 3" navigation={this.props.navigation} />
                            <Post profile={profile} name="Muhammad Ilham Fajar" date={now} post="Post ke 2" navigation={this.props.navigation} />
                            <Post profile={profile} name="Muhammad Ilham Fajar" date={now} post="Post ke 1" navigation={this.props.navigation} />
                        </View>
                        : this.state.navigation == 'dashboard'
                            ?
                            this.state.program.length > 0 ? 
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                flexWrap: 'wrap',
                                margin: 8
                            }}>
                                {this.state.program.map(data => {
                                return (
                                    <View key={data.id}>
                                    <TouchableOpacity
                                        onPress={() => {data.navigation.navigate(`${data.id}`)}}
                                        >
                                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                                            <View style={{
                                                borderRadius : 8,
                                                backgroundColor : '#C4C4C4',
                                                borderWidth : 2,
                                                borderColor : '#C4C4C4',
                                                height : 75,
                                                width : 75,
                                                margin : 8,
                                            }}> 
                                            <Image style={{height : 75, width : 75, borderRadius: 8}} source={data.image} />
                                            </View>
                                            <Text style={{textAlign: 'center'}}>
                                                {data.title}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    </View>
                                )
                            })}
                                <View>
                                    <TouchableOpacity
                                        onPress={() => {this.setModalVisible(!this.state.modal)}}
                                        >
                                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                                            <View style={{
                                                borderRadius : 8,
                                                backgroundColor : '#C4C4C4',
                                                borderWidth : 2,
                                                borderColor : '#C4C4C4',
                                                height : 75,
                                                width : 75,
                                                margin : 8,
                                                color: '#000'
                                            }}> 
                                            <Text style={{fontSize: 72, marginTop: -16, textAlign: 'center'}}>+</Text>
                                            </View>
                                            <Text style={{textAlign: 'center'}}>
                                                Tambah Program
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    </View>
                            </View>
                            :
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 32 }}>
                                <Text style={{ textAlign: 'center' }}>Maaf, anda belum memiliki program apapun</Text>
                                <TouchableOpacity style={{ backgroundColor: '#42A7F3', marginTop: 24, paddingVertical: 12, borderRadius: 4, minWidth: 328, alignItems: 'center' }} onPress={()=>{this.setModalVisible(!this.state.modal)}}>
                                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Ikut Program</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={{ paddingHorizontal: 24, marginTop: 24 }}>
                                <View style={{ flexDirection: 'row', marginBottom: 36 }}>
                                    <Image source={coin} />
                                    <View style={{ paddingRight: 24, marginLeft: 8 }}>
                                        <Text style={{ fontWeight: '600' }}>Penabung Ulung</Text>
                                        <Text>Kamu berhasil menabung sejumlah Rp. 500.000</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', marginBottom: 36 }}>
                                    <Image source={coin} />
                                    <View style={{ paddingRight: 24, marginLeft: 8 }}>
                                        <Text style={{ fontWeight: '600' }}>Penabung Ulung</Text>
                                        <Text>Kamu berhasil menabung sejumlah Rp. 500.000</Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row', marginBottom: 36 }}>
                                    <Image source={coin} />
                                    <View style={{ paddingRight: 24, marginLeft: 8 }}>
                                        <Text style={{ fontWeight: '600' }}>Penabung Ulung</Text>
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

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modal}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>

                    <View style={{
                        width: dimenW, minHeight: 200, backgroundColor: '#fff', position: 'absolute', bottom: 0, borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }}>
                        <View style={{
                            backgroundColor: '#5EB4F5',
                            height: 50,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            paddingVertical: 12,
                            paddingHorizontal: 24,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>Program Tersedia</Text>
                            <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }} onPress={() => {
                                this.setModalVisible(!this.state.modal);
                            }} >X</Text>
                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            margin: 8
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                                Alert.alert(
                                    'Program Anti Rokok',
                                    'Apakah anda ingin bergabung program ini?',
                                    [
                                      {text: 'Cancel', onPress: () => {}, style: 'cancel'},
                                      {text: 'Join', onPress: () => {
                                        this.state.program.push(
                                            {
                                                title : "Anti Rokok",
                                                image : require('../../assets/images/antirokok.png'),
                                                navigation : this.props.navigation,
                                                id : 'Dashboard'
                                            }
                                            )
                                        this.props.navigation.navigate('Dashboard')
                                        this.setState({modal : !this.state.modal})
                                        }},
                                    ]
                                )
                            }}
                        >
                            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                                <View style={{
                                    borderRadius : 8,
                                    backgroundColor : '#C4C4C4',
                                    borderWidth : 2,
                                    borderColor : '#C4C4C4',
                                    height : 75,
                                    width : 75,
                                    margin: 8,
                                }}> 
                                    <Image style={{
                                            height : 75,
                                            width : 75,
                                            borderRadius : 8,
                                        }}
                                        source={require('../../assets/images/antirokok.png')}
                                    />
                                </View>
                                <Text style={{textAlign: 'center'}}>
                                    Anti Rokok
                                </Text>
                            </View>
                        </TouchableOpacity>
                            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                                <View style={{
                                    borderRadius : 8,
                                    backgroundColor : '#C4C4C4',
                                    borderWidth : 2,
                                    borderColor : '#C4C4C4',
                                    height : 75,
                                    width : 75,
                                    margin : 8,
                                }}> 
                                </View>
                                <Text style={{textAlign: 'center'}}>
                                    Akan Datang
                                </Text>
                            </View>
                            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                                <View style={{
                                    borderRadius : 8,
                                    backgroundColor : '#C4C4C4',
                                    borderWidth : 2,
                                    borderColor : '#C4C4C4',
                                    height : 75,
                                    width : 75,
                                    margin : 8,
                                }}> 
                                </View>
                                <Text style={{textAlign: 'center'}}>
                                    Akan Datang
                                </Text>
                            </View>
                            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                                <View style={{
                                    borderRadius : 8,
                                    backgroundColor : '#C4C4C4',
                                    borderWidth : 2,
                                    borderColor : '#C4C4C4',
                                    height : 75,
                                    width : 75,
                                    margin : 8,
                                }}> 
                                </View>
                                <Text style={{textAlign: 'center'}}>
                                    Akan Datang
                                </Text>
                            </View>
                        </View>
                    </View>
                </Modal>
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