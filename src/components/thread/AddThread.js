import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CheckBox from 'react-native-check-box'

export class AddThread extends Component {
  constructor(props) {
      super(props)
      this.state={
          olahraga: '',
          lokasi: '',
          date: '',
          time: '',
          limit: '',
          unlimited : false,
          type: 'post',
          navigation: 'olahraga',
      }
  }
  static propTypes = {
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <View style={{flexDirection: 'row', padding: 8, height: 250}}>
        <View style={{flex: 2/12}}>
            <Image 
            style={styles.ProfImage}
            source={require('../../assets/images/adipati.png')}
            />
        </View>
        <View style={{flex: 10/12, paddingHorizontal: 8}}>
            <View style={{flexDirection: 'column'}}>
            {this.state.type === 'post' ? 
            (
                <TextInput
                editable = {true}
                placeholder = "Bagikan Pengalamanmu"
                onChangeText = {(text) => this.setState({text})}
                value = {this.state.text}
                multiline = {true}
                style={{
                    textAlignVertical: 'top',
                    fontSize: 20,
                    height: 250
                }}
                />
            )
            :
            (
                <View style={{flexDirection: 'column', height:250, padding: 16}}>
                <View style={styles.Navigation}>
                    <View style={styles.NavFrame}>
                        <TouchableOpacity
                            onPress={() => this.setState({ navigation: 'olahraga' })}
                        >
                            <Text style={this.state.navigation === 'olahraga' ? styles.NavButtonActive : styles.NavButton}>Olahraga</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.NavFrame}>
                        <TouchableOpacity
                            onPress={() => this.setState({ navigation: 'nongkrong' })}
                        >
                            <Text style={this.state.navigation === 'nongkrong' ? styles.NavButtonActive : styles.NavButton}>Nongkrong</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {this.state.navigation === 'olahraga' ? 
                (
                    <View>

                    <TextInput
                        editable = {true}
                        placeholder = "olahraga"
                        onChangeText = {(text) => this.setState({olahraga : text})}
                        value = {this.state.olahraga}
                        style={styles.TextInput}
                        />
                    <TextInput
                        editable = {true}
                        placeholder = "lokasi"
                        onChangeText = {(text) => this.setState({lokasi : text})}
                        value = {this.state.lokasi}
                        style={styles.TextInput}
                        />
                    <View style={{flexDirection: 'row'}}>    
                    <TextInput
                        editable = {true}
                        placeholder = "YYYY-MM-DD"
                        onChangeText = {(text) => this.setState({date : text})}
                        value = {this.state.date}
                        style={styles.TextInput2}
                        />
                    <TextInput
                        editable = {true}
                        placeholder = "00:00"
                        onChangeText = {(text) => this.setState({time : text})}
                        value = {this.state.time}
                        style={styles.TextInput2}
                        />
                    </View>
                    <View style={{flexDirection: 'row'}}>    
                    <TextInput
                        editable = {this.state.unlimited ? false : true}
                        placeholder = {this.state.unlimited ? "Tanpa Batas" : "10 Orang"}
                        onChangeText = {(text) => this.setState({limit : text})}
                        value = {this.state.limit}
                        style={styles.TextInput2}
                        />
                    <CheckBox
                        style={{flex: 1/2, padding: 10}}
                        onClick={()=>{
                            this.setState({
                                unlimited:!this.state.unlimited
                            })
                        }}
                        isChecked={this.state.unlimited}
                        rightText={"Tanpa Batas"}
                        />
                    </View>
                    </View>
                )
                :
                (
                    <View>

                    <TextInput
                        editable = {true}
                        placeholder = "kegiatan"
                        onChangeText = {(text) => this.setState({olahraga : text})}
                        value = {this.state.olahraga}
                        style={styles.TextInput}
                        />
                    <TextInput
                        editable = {true}
                        placeholder = "lokasi"
                        onChangeText = {(text) => this.setState({lokasi : text})}
                        value = {this.state.lokasi}
                        style={styles.TextInput}
                        />
                    <View style={{flexDirection: 'row'}}>    
                    <TextInput
                        editable = {true}
                        placeholder = "YYYY-MM-DD"
                        onChangeText = {(text) => this.setState({date : text})}
                        value = {this.state.date}
                        style={styles.TextInput2}
                        />
                    <TextInput
                        editable = {true}
                        placeholder = "00:00"
                        onChangeText = {(text) => this.setState({time : text})}
                        value = {this.state.time}
                        style={styles.TextInput2}
                        />
                    </View>
                    <View style={{flexDirection: 'row'}}>    
                    <TextInput
                        editable = {this.state.unlimited ? false : true}
                        placeholder = {this.state.unlimited ? "Tanpa Batas" : "10 Orang"}
                        onChangeText = {(text) => this.setState({limit : text})}
                        value = {this.state.limit}
                        style={styles.TextInput2}
                        />
                    <CheckBox
                        style={{flex: 1/2, padding: 10}}
                        onClick={()=>{
                            this.setState({
                                unlimited:!this.state.unlimited
                            })
                        }}
                        isChecked={this.state.unlimited}
                        rightText={"Tanpa Batas"}
                        />
                    </View>
                    </View>
                )
                }
                </View>

            )
            }
            <View style={{flexDirection: 'row', padding: 8, justifyContent: 'space-between', borderTopColor: '#408AF9', borderTopWidth: 2,}}>
                <TouchableOpacity
                    onPress={() => { this.state.type === 'post' ? this.setState({type: 'agenda'}) : this.setState({type: 'post'})}}
                    >
                    <Image
                        style={styles.TypeImage}
                        source={require('../../assets/images/agenda.png')}
                        />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {this.props.navigation.navigate("Thread")}}
                    >
                    <Text style={{
                        textAlign: 'center',
                        height: 30,
                        width: 100,
                        fontSize: 12,
                        borderRadius: 200,
                        textAlignVertical: 'center',
                        color: '#FFF',
                        backgroundColor: '#408AF9',
                        borderColor: '#408AF9',
                        borderWidth: 1,
                        paddingHorizontal: 8
                    }}>
                        BAGIKAN
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

const styles = StyleSheet.create({
    ProfImage: {
        width: 50,
        height: 50,
        borderRadius: 5000,
        margin: 8,
        borderColor: '#C4C4C4',
        borderWidth: .5,
    },
    TypeImage: {
        width: 30,
        height: 30,
        marginHorizontal: 8,
    },
    TextInput: {
        fontSize: 16,
        borderColor: '#C4C4C4',
        borderWidth: .5,
        borderRadius: 4,
        height: 32,
        margin: 8,
        paddingVertical: 0,
        paddingHorizontal: 8,
        textAlignVertical: 'center'
    },
    TextInput2: {
        fontSize: 16,
        borderColor: '#C4C4C4',
        borderWidth: .5,
        borderRadius: 4,
        height: 32,
        margin: 8,
        paddingVertical: 0,
        paddingHorizontal: 8,
        textAlignVertical: 'center',
        flex: 1/2
    },
    Navigation: {
        flexDirection: 'row',
        marginBottom: 8
    },
    NavFrame: {
      flex: 1/2,
    },
    NavButton: {
        textAlign: 'center',
        height: 30,
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
        height: 30,
        fontSize: 16,
        borderRadius: 200,
        textAlignVertical: 'center',
        color: '#FFF',
        backgroundColor: '#408AF9',
        borderColor: '#408AF9',
        borderWidth: 1,
        marginHorizontal: 8
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(AddThread)
