import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Agenda, GalangDana } from '../Common'
import profil from '../../assets/images/adipati.png';

const now = new Date().toLocaleTimeString()
const agenda = {
  title : "Olahraga Basket",
  location : "Lapangan Rampal",
  time : "18:20",
  participants : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']
}

export class Community extends Component {
  static navigationOptions = {
      title: 'Community',
  };

  constructor(props) {
    super(props)
    this.state = {
        navigation : "meetup"
    }
  }

  static propTypes = {
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.Navigation}>
                <View style={styles.NavFrame}>
                    <TouchableOpacity
                        onPress={() => this.setState({ navigation: 'meetup' })}
                    >
                        <Text style={this.state.navigation === 'meetup' ? styles.NavButtonActive : styles.NavButton}>Meetup</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.NavFrame}>
                    <TouchableOpacity
                        onPress={() => this.setState({ navigation: 'donation' })}
                    >
                        <Text style={this.state.navigation === 'donation' ? styles.NavButtonActive : styles.NavButton}>Donation</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {this.state.navigation === 'meetup' ? 
            (
                <ScrollView style={styles.ContentContainer}>
                    <Agenda profile={profil} name="Helmi Zulfikar" date={now} agenda={agenda} navigation={this.props.navigation}/>
                    <Agenda profile={profil} name="Helmi Zulfikar" date={now} agenda={agenda} navigation={this.props.navigation}/>
                    <Agenda profile={profil} name="Helmi Zulfikar" date={now} agenda={agenda} navigation={this.props.navigation}/>
                </ScrollView>
            )
            :
            (
                <ScrollView style={styles.ContentContainer}>
                    <GalangDana title="Bakti sosial anak yatim di Sawojajar" name="Helmi Zulfikar" time="5" total="2.700.000" target="3.000.000"/>
                    <GalangDana title="Bakti sosial anak yatim di SMK Telkom Malang" name="Muhammad Ilham Fajar" time="5" total="2.300.000" target="4.500.000"/>
                </ScrollView>
            )
            }
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
      flexDirection: 'column',
      backgroundColor: '#fff',
      paddingTop: 8,
      flex: 1
    },
    Navigation: {
        flexDirection: 'row',
        padding: 8
    },
    NavFrame: {
      flex: 1/2,
    },
    NavButton: {
        textAlign: 'center',
        height: 40,
        fontSize: 16,
        borderRadius: 200,
        textAlignVertical: 'center',
        color: '#408AF9',
        backgroundColor: '#FFF',
        borderColor: '#408AF9',
        borderWidth: 1,
        marginHorizontal: 8,
    },
    NavButtonActive: {
        textAlign: 'center',
        height: 40,
        fontSize: 16,
        borderRadius: 200,
        textAlignVertical: 'center',
        color: '#FFF',
        backgroundColor: '#408AF9',
        borderColor: '#408AF9',
        borderWidth: 1,
        marginHorizontal: 8
    },
    ContentContainer: {
        margin: 16
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Community)
