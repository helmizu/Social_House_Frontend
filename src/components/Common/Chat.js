import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

class Chat extends Component {
  constructor(props) {
      super(props)
  }

  render() {
    return (
        <View style={{borderBottomColor: '#C4C4C4', borderBottomWidth: .5, padding: 8, flexDirection: 'row'}}>
        <View style={{flex:1/6}}>
            <Image
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 5000,
                    borderColor: '#C4C4C4',
                    borderWidth: .5
                }}
                source={this.props.profile}
            />
        </View>
        <View style={{flex:5/6, flexDirection: 'column',}}>
            <View style={{flex:2/8, flexDirection: 'row', justifyContent: 'space-between',}}>
                <Text style={{fontWeight: '500'}}>{this.props.name}</Text>
                <Text style={{color: '#C4C4C4'}}>{this.props.time}</Text>
            </View>
            <View style={{flex:6/8}}>
                <Text>{this.props.message}</Text>
            </View>
        </View>
    </View>

    )
  }
}

export default Chat
