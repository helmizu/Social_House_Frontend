import React, { Component } from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Post, Agenda } from '../Common'
import FAB from 'react-native-fab'

import profil from '../../assets/images/adipati.png';
import profile from '../../assets/27.png';

const now = new Date().toLocaleTimeString()
const agenda = {
  title : "Olahraga Basket",
  location : "Lapangan Rampal",
  time : "18:20",
  participants : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']
}

export class Thread extends Component {
  static navigationOptions = {
      title: 'Thread',
  }

  static propTypes = {
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={styles.container}>
            <Post profile={profile} name="Muhammad Ilham Fajar" date={now} post="Post ke 3" navigation={this.props.navigation} />
            <Agenda profile={profil} name="Helmi Zulfikar" date={now} agenda={agenda} navigation={this.props.navigation}/>
            <Post profile={profil} name="Helmi Zulfikar" date={now} post="Percobaan Kedua" navigation={this.props.navigation}/>
            <Post profile={profile} name="Muhammad Ilham Fajar" date={now} post="Post ke 2" navigation={this.props.navigation} />
            <Post profile={profil} name="Helmi Zulfikar" date={now} post="Percobaan pertama" navigation={this.props.navigation}/>
            <Post profile={profile} name="Muhammad Ilham Fajar" date={now} post="Post ke 1" navigation={this.props.navigation} />
            <Agenda profile={profil} name="Helmi Zulfikar" date={now} agenda={agenda} navigation={this.props.navigation}/>
        </ScrollView>
        <FAB visible={true} iconTextComponent={<Text>+</Text>} buttonColor="#408AF9" iconTextColor="#FFFFFF" onClickAction={() => {this.props.navigation.navigate("AddThread")}} />
      </View>
)
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Thread)
