import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView
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

// 11 parametrii de trimis, primit
const params = {
            title: "",
            price: "",
            rooms: "",
            totalArea: "",
            usableArea: "",
            orientation: "",
            year: "",   
            floors: "",
            floorsBuilding:"",
            propertyType:"",
            location: "",  
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

class AdaugaApartament extends React.Component {

  constructor(props){ 
    super();
    this.registerApartment = this.registerApartment.bind(this);
  }

  state = params;

  componentWillUnmount() {}

  onLastTitleChange = title => {
    this.setState({title});
  };

  onPriceChange = price => {
    this.setState({price});
  };

  onRoomsChange = rooms => {
    this.setState({rooms});
  };

  onTotalAreaChange = totalArea => {
    this.setState({totalArea});
  };

  onUsableAreaChange = usableArea => {
    this.setState({usableArea});
  };

  onOrientationChange = orientation => {
    this.setState({orientation});
  };

  onYearChange = year => {
    this.setState({year});
  };
  
  onFloorChange = floor => {
    this.setState({floor});
  };

  onFloorsBuildingChange = floorsBuilding => {
    this.setState({floorsBuilding});
  };

  onLocationChange = location => {
    this.setState({location});
  };

  onPropertyType = propertyType => {
    this.setState({propertyType});
  };
  
  registerApartment() {
  this.setState({ error: '', loading: true });
  const {title, price, rooms, totalArea, usableArea, orientation, year, floor, floorsBuilding, location, propertyType} = this.state;
  const payload = {title, price, rooms, totalArea, usableArea, orientation, year, floor, floorsBuilding, location, propertyType};
  console.log(payload); //aici verific ca s-au trimis
  
  axios.post("http://192.168.0.100:8080/advent/add",
    qs.stringify(payload) //asta e ce trimitem
    ,)
    .then((response) => {
      console.log(response);
      this.props.navigation.navigate('Acasa');
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
                 <ScrollView>
                <Block flex={0.17} middle>
                  <Text color="#8898AA" size={25}>
                   Adauga un apartament
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
                        onChangeText={this.onLastTitleChange}
                        value={this.state.title}
                        borderless
                        placeholder="Titluu apartament "
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
                        onChangeText={this.onPriceChange}
                        value={this.state.price}
                        borderless
                        placeholder="Pret"
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
                        onChangeText={this.onRoomsChange}
                        value={this.state.rooms}
                        borderless
                        placeholder="Rooms"
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
                        onChangeText={this.onTotalAreaChange}  
                        value={this.state.totalArea}
                        borderless
                        placeholder="totalArea"
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
                        onChangeText={this.onUsableAreaChange}
                        value={this.state.usableArea}
                        password
                        borderless
                        placeholder="usableArea"
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
                        onChangeText={this.onOrientationChange}
                        value={this.state.orientation}
                        password
                        borderless
                        placeholder="orientation"
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
                        onChangeText={this.onYearChange}
                        value={this.state.year}
                        password
                        borderless
                        placeholder="year"
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
                        onChangeText={this.onFloorChange}
                        value={this.state.floor}
                        password
                        borderless
                        placeholder="floor"
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
                        onChangeText={this.onFloorsBuildingChange}
                        value={this.state.floorsBuilding}
                        password
                        borderless
                        placeholder="floorsBuilding"
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
                        onChangeText={this.onLocationChange}
                        value={this.state.location}
                        password
                        borderless
                        placeholder="location"
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

                   
                    {/* </Block> */}

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
                      <Button color="primary" style={styles.createButton} onPress={this.registerApartment}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          ADAUGA PROPRIETATEA
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
                </ScrollView>
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

export default AdaugaApartament;
