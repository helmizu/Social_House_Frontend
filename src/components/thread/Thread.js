import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Post, Agenda } from '../Common';

import profil from '../../assets/images/adipati.png';

const now = new Date().toLocaleTimeString()
const agenda = {
  title : "Olahraga Basket",
  location : "Lapangan Rampal",
  time : "18:20",
  participants : ['lasdjasldjas', 'alsdasdjasdj', 'asidlasflajs']
}

export class Thread extends Component {
  static navigationOptions = {
      title: 'Thread',
  }

  static propTypes = {
  }

  render() {
    return (
        <ScrollView style={styles.container}>
            <Post profile={profil} name="Helmi" date={now} post="Content post" navigation={this.props.navigation}/>
            <Agenda profile={profil} name="Helmi" date={now} agenda={agenda} navigation={this.props.navigation}/>
            <Post profile={profil} name="Helmi" date={now} post="Content post" navigation={this.props.navigation}/>
            <Agenda profile={profil} name="Helmi" date={now} agenda={agenda} navigation={this.props.navigation}/>
        </ScrollView>
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
