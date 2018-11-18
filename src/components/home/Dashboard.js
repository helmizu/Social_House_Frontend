import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Text, Dimensions, Image } from 'react-native';
import LineChart from '../chart/line-chart';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Dashboard extends Component {
  static navigationOptions = {
      title: 'Dashboard',
  };
    
  static propTypes = {
  }

  render() {
    return (
        <ScrollView style={styles.container}>
        <LineChart
          data={{
            labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
            datasets: [{
              data: [
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10,
                Math.random() * 10,
              ]
            }]
          }}
          width={Dimensions.get('window').width} // from react-native
          height={200}
          withShadow = {false}
          withDots = {true}
          chartConfig={{
            backgroundColor: '#47B0FF',
            backgroundGradientFrom: '#47B0FF',
            backgroundGradientTo: '#246387',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
          }}
          bezier
        />
        <View style={styles.MessageContainer}>
          <Text style={styles.Message}>
            Selamat Target Telah Tercapai
          </Text>
        </View>
        <View style={styles.ImageContainer}>
          <Image
            style={styles.ImageItems}
            source={require('../../assets/images/care.png')}
          />
          <Text style={styles.Condition}>
            Kawasan Bebas Asap Rokok
          </Text>
        </View>
        <View style={styles.DayContainer}>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between',}}>
            <Text style={styles.TextTarget}>
              Target
            </Text>
            <Text style={styles.InfoTarget}>
              6 Batang / hari
            </Text>
          </View>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between',}}>
            <Text style={styles.TextToday}>
              Hari ini
            </Text>
            <Text style={styles.InfoToday}>
              5 Batang
            </Text>
          </View>
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between',}}>
            <Text style={styles.TextTabungan}>
              Tabungan
            </Text>
            <Text style={styles.InfoTabungan}>
              Rp 300.000
            </Text>
          </View>
        </View>
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
      backgroundColor: '#E5E5E5',
    },
    ImageContainer: {
      alignItems: 'center',
      marginVertical: 12,
      marginHorizontal : 24,
      borderRadius: 8,
      shadowColor: '#000',
      shadowRadius: 16,
      shadowOffset: {width: 0,height: 4},
      shadowOpacity: 0.05,
      backgroundColor: '#fff',
      paddingVertical: 20
    },
    ImageItems: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
      marginBottom: 10
    },
    MessageContainer: {
      paddingVertical: 45,
      alignItems: 'center',
      marginHorizontal : 24,
      backgroundColor: '#25F66C',
      borderRadius: 8,
      marginTop: -60,
      shadowColor: '#000',
      shadowRadius: 16,
      shadowOffset: {width: 0,height: 4},
      shadowOpacity: 0.05,
    },
    Message: {
      fontSize: 20,
      color: '#fff'
    },
    Condition: {
      color: '#47B0FF',
      fontSize: 16,
    },
    TextTarget: {
      paddingVertical: 32,
      borderLeftColor: '#66BDFE',
      borderLeftWidth: 8,
      paddingHorizontal: 16,
      borderTopLeftRadius: 8,
      fontSize: 18,
      fontWeight: '500',
      color: '#656766'
    },
    TextToday: {
      paddingVertical: 32,
      borderLeftColor: '#FC8D8D',
      borderLeftWidth: 8,
      paddingHorizontal: 16,
      fontSize: 18,
      fontWeight: '500',
      color: '#656766'
    },
    TextTabungan: {
      paddingVertical: 32,
      borderLeftColor: '#FFE661',
      borderLeftWidth: 8,
      paddingHorizontal: 16,
      borderBottomLeftRadius: 8,
      fontSize: 18,
      fontWeight: '500',
      color: '#656766'
    },
    InfoTarget: {
      paddingVertical: 32,
      paddingHorizontal: 16,
      fontSize: 16,
      color: '#797979',
    },
    InfoToday: {
      paddingVertical: 32,
      paddingHorizontal: 16,
      fontSize: 16,
      color: '#797979',
    },
    InfoTabungan: {
      paddingVertical: 32,
      paddingHorizontal: 16,
      fontSize: 16,
      color: '#797979',
    },
    DayContainer: {
      marginHorizontal : 24,
      borderRadius: 8,
      shadowColor: '#000',
      shadowRadius: 16,
      shadowOffset: {width: 0,height: 4},
      shadowOpacity: 0.05,
      backgroundColor: '#fff',
      marginBottom: 24
    },
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
