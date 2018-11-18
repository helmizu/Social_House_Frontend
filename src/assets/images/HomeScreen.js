import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableHighlight,
  Alert,
  TextInput,
  Dimensions
} from 'react-native';

import { Chat, Photo } from '../components/common';

const window = Dimensions.get('window')
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  constructor() {
      super()
      this.state = {
          text : '',
          navigation: 'obrolan',
          join : false
      }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.InfoContainer}>
          <Text style={styles.TextTitle}>
              Olahraga Basket
          </Text>
          <Text style={styles.TextInfo}>
              18:00 di Lapangan Rampal
          </Text>
          <View style={styles.ProfContainer}>
            <Image
                style={styles.ProfImage}
                source={require('../assets/images/adipati.png')}
            />
            <Image
                style={styles.ProfImage}
                source={require('../assets/images/robot-prod.png')}
            />
            <Image
                style={styles.ProfImage}
                source={require('../assets/images/share.png')}
            />
            <Image
                style={styles.ProfImage}
                source={require('../assets/images/care.png')}
            />
            <Image
                style={styles.ProfImage}
                source={require('../assets/images/robot-dev.png')}
            />
            <Text style={styles.MoreProf}>
                9
            </Text>
          </View>
        </View>
        <View style={styles.Navigation}>
            <View style={this.state.navigation === 'obrolan' ? styles.NavFrameActive : styles.NavFrame}>
                <TouchableOpacity
                    onPress={() => this.setState({ navigation: 'obrolan' })}
                >
                    <Text style={styles.NavButton}>Obrolan</Text>
                </TouchableOpacity>
            </View>
            <View style={this.state.navigation === 'galeri' ? styles.NavFrameActive : styles.NavFrame}>
                <TouchableOpacity
                    onPress={() => this.setState({ navigation: 'galeri' })}
                >
                    <Text style={styles.NavButton}>Galeri</Text>
                </TouchableOpacity>
            </View>
        </View>
        {this.state.join ?
        (
            this.state.navigation === 'obrolan' ? 
            (
                <ScrollView style={styles.ChatContainer}>
                    <Chat profile={require('../assets/images/adipati.png')} time={new Date().toLocaleTimeString()} name="Helmi Zulfikar S" message="langsung dateng aja ke tempat bro"/>
                    <Chat profile={require('../assets/images/robot-dev.png')} time={new Date().toLocaleTimeString()} name="Roboto Develope" message="oke bro ketemu disana"/>
                    <Chat profile={require('../assets/images/robot-prod.png')} time={new Date().toLocaleTimeString()} name="Roboto Prodo" message="siaapppp"/>
                </ScrollView>
            )
            :
            (
                <ScrollView style={styles.ChatContainer}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap'
                    }}>
                        <Photo/>
                        <Photo/>
                        <Photo/>
                        <Photo/>
                        <Photo/>
                        <Photo/>
                        <Photo/>
                        <Photo/>
                        <Photo/>
                        <Photo/>
                        <Photo/>
                        <Photo/>
                        <Photo/>
                    </View>
                </ScrollView>
            )
        ) 
        :
        (
            <ScrollView style={styles.ChatContainer}>
            
            </ScrollView>
        )
        }
        {this.state.join ? 
        (
            this.state.navigation === 'obrolan' ? 
            (
                <View style={styles.MessageContainer}>
                    <TextInput
                        editable = {true}
                        placeholder = "ketik pesan disini ...."
                        onChangeText = {(text) => this.setState({text})}
                        value = {this.state.text}
                        style={{
                            fontSize: 20,
                            borderBottomColor: '#5BB8FE',
                            borderBottomWidth: 2,
                            flex: 11/12
                        }}
                    />
                    <TouchableOpacity 
                        onPress={() => {}}
                        style={{flex:1/12}}
                    >
                        <Image 
                            style={styles.ButtonSend}
                            source={require('../assets/images/send-button.png')}
                        />
                    </TouchableOpacity>
                </View>
            )
            :
            (
                <View style={styles.MessageContainer}>
                    <View style={{flex:1, alignItems: 'center'}}>
                        <TouchableOpacity 
                            onPress={() => {}}
                            style={{
                                padding: 2
                            }}
                            >
                            <Image 
                                style={styles.ButtonUpload}
                                source={require('../assets/images/upload.png')}
                                />
                        </TouchableOpacity>
                    </View>
                </View>
            )   
        ) 
        :
        (
            <View style={styles.MessageContainer}>
                <View style={{flex:1, alignItems: 'center'}}>
                    <TouchableOpacity 
                        onPress={() => {
                            Alert.alert(
                                'Yakin ingin bergabung?',
                                '',
                                [
                                  {text: 'Tidak', onPress: () => {}, style: 'cancel'},
                                  {text: 'Join', onPress: () => {this.setState({join : true})}},
                                ]
                            )
                        }}
                    >
                        <Text style={{
                            color : '#2FA4F9',
                            paddingVertical: 4,
                            fontSize: 24
                        }}>
                            JOIN
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingTop: 24,
    flex: 1
  },
  InfoContainer: {
    padding: 8,
  },
  TextTitle: {
    fontSize: 24,
    fontWeight: '500',
    color: '#000'
  },
  TextInfo: {
    fontSize: 18,
    color: '#C4C4C4'
  },
  ProfImage: {
    width: window.width/9,
    height: window.width/9,
    borderRadius: 5000,
    margin: 8,
    borderColor: '#C4C4C4',
    borderWidth: .5
  },
  MoreProf: {
    width: window.width/9,
    height: window.width/9,
    borderRadius: 5000,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    margin: 8,
    backgroundColor: '#C4C4C4'
  },
  ProfContainer: {
    flexDirection: 'row'
  },
  MessageContainer: {
    padding : 8,
    flexDirection : 'row',
    borderTopWidth : .5,
    borderTopColor: '#C4C4C4'
  },
  ChatContainer: {
    padding : 8
  },
  ButtonSend: {
      width: 24,
      height: 24,
      marginTop: 8,
      marginLeft: 8,
  },
  ButtonUpload: {
    width: 24,
    height: 24
  },
  Navigation: {
      flexDirection: 'row',
      padding: 8
  },
  NavFrame: {
    flex: 1/2,
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 2,
  },
  NavFrameActive: {
    flex: 1/2,
    borderBottomColor: '#5BB8FE',
    borderBottomWidth: 2,
  },
  NavButton: {
      textAlign: 'center',
      color: '#000',
      paddingVertical: 8,
      fontSize: 16
  },
  GaleriContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
