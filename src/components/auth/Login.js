import React, { Component } from 'react';
import { Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Container, Button, Content, Form, Item, Input, Label } from 'native-base';

//action
import {emailChanged, passwordChanged} from '../../redux/actions/authAction';

class Login extends Component {
    onEmailChange = (email) => {
        this.props.emailChanged(email)
    }

    onPasswordChange = (password) => {
        this.props.passwordChanged(password)
    }

    render() {
        return (
            <Container>
                <Text>Login Screen</Text>
                <Content>
                    <Form>
                        <Item inlineLabel>
                            <Label>Username</Label>
                            <Input value={this.props.email} onChangeText={this.onEmailChange.bind(this)} />
                        </Item>
                        <Item inlineLabel last>
                            <Label>Password</Label>
                            <Input value={this.props.password} onChangeText={this.onPasswordChange.bind(this)} />
                        </Item>
                        <Button full info><Text> Info </Text></Button>
                    </Form>
                </Content>
            </Container>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('SignedIn')
    }
}

const mapStateToProps = (state) => ({
    email : state.auth.email,
    password : state.auth.password
})

const mapDispatchToProps = {
    emailChanged,
    passwordChanged    
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)