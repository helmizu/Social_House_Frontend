import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Post extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        // props {profile, name, date, post}
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
            <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between',}}>
              <Text style={styles.TextName}>
                {this.props.name}
              </Text>
              <Text style={styles.TextTime}>
                {this.props.date}
              </Text>
            </View>
            <View style={{flex:4}}>
              <Text style={styles.TextThread}>
                {this.props.post} 
              </Text>
            </View>
            <View style={{flex:1, flexDirection: 'row'}}>
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
    borderBottomColor: '#D6D6D6',
    borderBottomWidth: 1
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
  }
});
