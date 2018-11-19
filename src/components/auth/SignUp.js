import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Container, Button, Content, Form, Item, Input, Label, DatePicker, Picker } from 'native-base';
import { connect } from 'react-redux';
//action
import {signupUser, emailChanged, passwordChanged, genderChanged, dateChanged, nameChanged, usernameChanged, confirmChanged } from '../../redux/actions/authAction';

const dimenW = Dimensions.get("window").width
class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date(), selected2: '' };
        this.setDate = this.setDate.bind(this);
    }

    static navigationOptions = {
        header: null,
    };

    //auth action
    onEmailChange = (email) => {
        this.props.emailChanged(email)
    }

    onPasswordChange = (password) => {
        this.props.passwordChanged(password)
    }

    onGenderChange = (gender) => {
        this.props.genderChanged(gender)
    }

    onDateChange = () => {
        this.props.dateChanged(this.state.chosenDate)
    }

    onNameChange = (name) => {
        this.props.nameChanged(name)
    }

    onUsernameChange = (username) => {
        this.props.usernameChanged(username)
    }

    onConfirmChange = (confirm) => {
        this.props.confirmChanged(confirm)
    }

    onButtonClicked = () => {
        const { email, password, gender, date, name, confirm, username } = this.props;
        this.props.signupUser(email, password, this.state.selected2, this.state.chosenDate, name, confirm, username, this.props.navigation.navigate)
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }

    render() {
        return (
            <Container>
                <Content>
                    <View style={{ backgroundColor: '#42A7F3', height: 200, width: dimenW, alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{ height: 65, width: 100 }} source={require('../../assets/images/logowhite.png')} />
                    </View>

                    <Form>
                        <Item floatingLabel last>
                            <Label>Nama Lengkap</Label>
                            <Input value={this.props.name} onChangeText={this.onNameChange.bind(this)} />
                        </Item>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                style={{ marginTop: 32, marginLeft: 8 }}
                                placeholder="Gender"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChange2.bind(this)}
                            >
                                <Picker.Item label="Laki-Laki" value="laki-laki" />
                                <Picker.Item label="Perempuan" value="perempuan" />
                            </Picker>
                        </Item>
                        <Item last style={{ marginTop: 32, marginBottom: 0, marginLeft: -8 }}>
                            <Content>
                                <DatePicker
                                    defaultDate={new Date(2000, 4, 4)}
                                    minimumDate={new Date(1990, 1, 1)}
                                    maximumDate={new Date(2010, 12, 31)}
                                    locale={"en"}
                                    timeZoneOffsetInMinutes={undefined}
                                    modalTransparent={false}
                                    animationType={"fade"}
                                    androidMode={"default"}
                                    placeHolderText="Select date"
                                    textStyle={{ color: "black" }}
                                    placeHolderTextStyle={{ color: "#333" }}
                                    onDateChange={this.setDate}
                                />
                            </Content>
                            <Text>
                                Date: {this.state.chosenDate.toString().substr(4, 12)}
                            </Text>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Username</Label>
                            <Input value={this.props.username} onChangeText={this.onUsernameChange.bind(this)} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Email</Label>
                            <Input value={this.props.email} onChangeText={this.onEmailChange.bind(this)} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input secureTextEntry={true} textContentType="password" value={this.props.password} onChangeText={this.onPasswordChange.bind(this)} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Konfirmasi Password</Label>
                            <Input secureTextEntry={true} textContentType="password" value={this.props.confirm} onChangeText={this.onConfirmChange.bind(this)} />
                        </Item>
                        <Button full info style={{ backgroundColor: '#42A7F3', marginHorizontal: 16, marginVertical: 16 }} onPress={this.onButtonClicked.bind(this)}><Text style={{ color: '#FFF', fontWeight: '600', fontSize: 20 }}> DAFTAR </Text></Button>
                    </Form>

                    <View style={{ marginVertical: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16 }}>Sudah punya akun?</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{ color: '#42A7F4', fontSize: 16 }}> Masuk </Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        );
    }
}


const mapStateToProps = (state) => ({
    email: state.auth.email,
    password: state.auth.password,
    gender: state.auth.gender,
    date: state.auth.date,
    name: state.auth.name,
    confirm: state.auth.confirm,
    username: state.auth.username
})

const mapDispatchToProps = {
    emailChanged,
    passwordChanged,
    genderChanged,
    dateChanged,
    nameChanged,
    confirmChanged,
    usernameChanged,
    signupUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)