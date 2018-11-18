import React, { Component } from 'react'
import { View } from 'react-native'

export class Photo extends Component {
  render() {
    return (
        <View style={{
            borderRadius : 8,
            backgroundColor : '#C4C4C4',
            borderWidth : 2,
            borderColor : '#C4C4C4',
            height : 115,
            width : 115,
            margin : 8,
        }}>
        </View>

    )
  }
}

export default Photo
