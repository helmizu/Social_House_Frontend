import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Container, Button, Content, Form, Item, Input, Label } from 'native-base';

//action
import {emailChanged, passwordChanged, loginUser} from '../../redux/actions/authAction';

const dimenW = Dimensions.get('window').width
class Login extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props)
    }

    onEmailChange = (email) => {
        this.props.emailChanged(email)
    }

    onPasswordChange = (password) => {
        this.props.passwordChanged(password)
    }

    onButtonClicked = () => {
        const {email, password} = this.props;
        this.props.loginUser(email, password, this.props.navigation.navigate)
    }

    render() {
        return (
            <Container>
            <View style={{ backgroundColor: '#42A7F3', height: 200, width: dimenW, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ height: 65, width: 100 }} source={require('../../assets/images/logowhite.png')} />
            </View>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email / Username</Label>
                            <Input value={this.props.email} onChangeText={this.onEmailChange.bind(this)} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input secureTextEntry={true} textContentType="password" value={this.props.password} onChangeText={this.onPasswordChange.bind(this)} />
                        </Item>
                        <Button full info style={{ backgroundColor: '#42A7F3', marginHorizontal: 16, marginVertical: 16}} onPress={this.onButtonClicked.bind(this)}><Text style={{color: '#FFF', fontWeight: '600', fontSize: 20}}> MASUK </Text></Button>
                    </Form>
                </Content>
                <View style={{marginVertical:16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 16}}>Belum punya akun?</Text> 
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}> 
                <Text style={{color: '#42A7F4', fontSize: 16}}> Daftar </Text> 
                </TouchableOpacity>
                </View>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    email : state.auth.email,
    password : state.auth.password
})

const mapDispatchToProps = {
    emailChanged,
    passwordChanged,
    loginUser    
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)