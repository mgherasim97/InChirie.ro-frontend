import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import deviceStorage from '../services/deviceStorage'; 
import axios from 'axios';
import qs from "qs";
import Spinner from 'react-native-loading-spinner-overlay';

import APIKit, {setClientToken} from '../share/APIKit';

const { width, height } = Dimensions.get("screen");


const params = {
            lastName: "",
            firstName: "",
            email: "",
            phoneNumber: "",
            password: "",
            password2: "",
            errors: {},          // Store error data from the backend here
            isAuthorized: false, // If auth is successful, set this to `true`
            isLoading: false,    // Set this to `true` if You want to show spinner
            
           };

// Things to bear in mind
// Whenever user types something in the username field we will update our this.state.username thru onUsernameChange(...)
// Whenever user types something in the password field we will update our this.state.password thru onPasswordChange(...)
// etc for other fields...
// Whenever user presses login we will fire registerUser(...)
// When data from backend arrives we will have to either call onSuccess or onFailure inside our registerUser(...) method

class Inregistrare extends React.Component {

  constructor(props){ 
    super();
    this.registerUser = this.registerUser.bind(this);
  }

  state = params;

  componentWillUnmount() {}

  onLastNameChange = lastName => {
    this.setState({lastName});
  };

  onFirstNameChange = firstName => {
    this.setState({firstName});
  };

  onEmailChange = email => {
    this.setState({email});
  };

  onPhoneNumberChange = phoneNumber => {
    this.setState({phoneNumber});
  };

  onPasswordChange = password => {
    this.setState({password});
  };

  onPassword2Change = password2 => {
    this.setState({password2});
  };
  
  registerUser() {

  this.setState({ error: '', loading: true });
  const {lastName, firstName, email, phoneNumber, password, password2} = this.state;
  const payload = {lastName, firstName, email, phoneNumber, password, password2};
  console.log(payload); //aici verific ca s-au trimis 
  
  axios.post("aa18zid7pceb5bt.c879gvy4bjgb.eu-west-2.rds.amazonaws.com:3306/user/register",
    qs.stringify(payload) //asta e ce trimitem
    ,)
    .then((response) => {
      console.log(response);
      //deviceStorage.saveItem("cheie_frumoasa", response.data.jwt);
    })
    .catch((error) => {
       console.log(error);
    });
    }

  render() {
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block style={styles.registerContainer}>
              
              <Block flex>
                <Block flex={0.17} middle>
                  <Text color="#8898AA" size={25}>
                   Inregistreaza-te
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        onChangeText={this.onLastNameChange}
                        value={this.state.lastName}
                        borderless
                        placeholder="Nume"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        onChangeText={this.onFirstNameChange}
                        value={this.state.firstName}
                        borderless
                        placeholder="Prenume"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        onChangeText={this.onEmailChange}
                        value={this.state.email}
                        borderless
                        placeholder="Email"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        onChangeText={this.onPhoneNumberChange}  
                        value={this.state.telefon}
                        borderless
                        placeholder="Telefon"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>

                    <Block width={width * 0.8}>
                      <Input
                        onChangeText={this.onPasswordChange}
                        value={this.state.parola}
                        password
                        borderless
                        placeholder="Parolă"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8}>
                      <Input
                        onChangeText={this.onPassword2Change}
                        value={this.state.parola2}
                        password
                        borderless
                        placeholder="Confirmare parolă"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                      
                      <Block row style={styles.passwordCheck}>
                        <Text size={12} color={argonTheme.COLORS.MUTED}>
                          Puterea parolei:
                        </Text>
                        <Text bold size={12} color={argonTheme.COLORS.SUCCESS}>
                          {" "}
                          Hoo, calmează-te că n-o ții minte!
                        </Text>
                      </Block>
                    </Block>
                    <Block row width={width * 0.75}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        color={argonTheme.COLORS.PRIMARY}
                        label="Sunt de acord cu "
                      />
                      <Button
                        style={{ width: 155 }}
                        color="transparent"
                        textStyle={{
                          color: argonTheme.COLORS.PRIMARY,
                          fontSize: 14
                        
                        }}
                      >
                        Termenele și condițiile
                      </Button>
                      
                    </Block>
                    <Block middle>
                      <Button color="primary" style={styles.createButton} onPress={this.registerUser}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          CREEAZĂ CONT
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});

export default Inregistrare;
