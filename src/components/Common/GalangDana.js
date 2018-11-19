import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Bar } from 'react-native-progress'

class GalangDana extends Component {
  render() {
    return (
        // props {title, name, time, total, target}
        <TouchableOpacity 
            style={{marginVertical: 8}}
            onPress={() => {}}
        >
        <View style={{flex:1}}>
            <View style={{
                height: 150,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                backgroundColor: '#C4C4C4',
                borderWidth: 1,
                borderColor: '#C4C4C4'
            }}>
            
            </View>
            <View style={{
                padding: 8,
                flexDirection: 'column',
                minHeight: 150,
                backgroundColor: '#FFF',
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                borderWidth: 1,
                borderColor: '#C4C4C4'
            }}>
                <Text style={{
                    fontSize : 16,
                    fontWeight: '500'
                }}>
                {this.props.title}
                </Text>
                <Text style={{ fontSize: 14 }}>
                {this.props.name}
                </Text>
                <View style={{flex:1, paddingTop: 16}}>
                    <Bar progress={parseFloat(this.props.total)/parseFloat(this.props.target)} width={null}/>
                </View>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between',  marginBottom: 8}}>
                <Text style={{ fontSize: 14 }}>
                    {this.props.time} Hari Lagi
                </Text>
                <Text style={{ fontSize: 14 }}>
                    Rp. {this.props.total} / Rp. {this.props.target}
                </Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    )
  }
}

export default GalangDana
