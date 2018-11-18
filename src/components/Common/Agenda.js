import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default class Agenda extends Component {
  
  render() {
    return (
        // props { profile, name, date, agenda : { title, time, location, participants : []}}
        <View style={styles.TimelineContainer}>
          <View style={{
            flex: 1,
          }} >
            <Image
              style={styles.ImageItems}
              source={this.props.profile}
            />
          </View>
          <View style={{
            flex: 5,
            minHeight: 125,
            flexDirection: 'column'
          }} >
            <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.TextName}>
                {this.props.name}
              </Text>
              <Text style={styles.TextTime}>
                {this.props.date}
              </Text>
            </View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('DetailAgenda')}>
            <View style={{flex:4}}>
              <View style={styles.Agenda}>
                <View style={styles.HeaderAgenda}>
                <Text style={{
                  fontWeight: '500',
                  color: '#FFF'
                }}>
                  {this.props.agenda.title}
                </Text>
                <Text style={{color: '#FFF'}}>
                  {this.props.agenda.time}
                </Text>
                </View>
                <View style={{
                  paddingHorizontal: 16,
                  flexDirection: 'column'
                }}>
                  <Text style={styles.Thumbnail}>
                    Location
                  </Text>
                  <Text style={{ fontWeight: '500' }}>
                    {this.props.agenda.location}
                  </Text>
                  <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',  marginVertical: 16}}>
                    <Text style={styles.TextParticipants}>
                      { this.props.agenda.participants.length < 10 ? `0${this.props.agenda.participants.length}` : this.props.agenda.participants.length }
                    </Text>
                    <TouchableOpacity 
                      onPress={() => {
                        Alert.alert(
                          'Yakin ingin bergabung?',
                          '',
                          [
                            {text: 'Cancel', onPress: () => {}, style: 'cancel'},
                            {text: 'Join', onPress: () => {this.props.navigation.navigate('Home')}},
                          ]
                        )
                      }}
                    >
                      <Text style={styles.TextJoin}>
                        JOIN
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            </TouchableOpacity>
            <View style={{flex:1, flexDirection: 'row', paddingVertical: 8}}>
                <TouchableOpacity onPress={() => {}}>
                    <Image
                        style={styles.ImageActionItems}
                        source={require('../../assets/images/like.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <Image
                        style={styles.ImageActionItems}
                        source={require('../../assets/images/comment.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <Image
                        style={styles.ImageActionItems}
                        source={require('../../assets/images/share.png')}
                    />
                </TouchableOpacity>
            </View>
          </View>
        </View>        
      )
    }
  }
  
const styles = StyleSheet.create({
  ImageItems: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 5000
  },
  ImagePeopleJoin: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    borderRadius: 3000
  },
  ImageActionItems: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 32,
  },
  TimelineContainer: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 8,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  TextName: {
    fontWeight: '500',
    fontSize: 14
  },
  TextTime: {
    color: '#656766',
    fontSize: 14
  },
  TextThread: {
    color: '#656766',
    fontSize: 14
  },
  Agenda: {
    borderRadius: 4,
    borderColor: '#EAE6E6',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'column',
    marginVertical: 8,
  },
  HeaderAgenda: {
    height: 40,
    backgroundColor: '#42A7F3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 10,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  Thumbnail: {
    color: '#656766',
    fontSize: 12,
    paddingTop: 16
  },
  TextJoin: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '500',
    color: '#44A8F4',
    height: 30,
    textAlignVertical: 'center'
  },
  TextParticipants: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '500',
    color: '#44A8F4',
    width: 30,
    height: 30,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderRadius: 3000,
    backgroundColor: '#E5E5E5',
  }
});
