import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  Icon,
  Input
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
import { AsyncStorage } from 'react-native';
import axios from 'axios';
import {Anca} from './Autentificare';

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

const params = {

            id:"",
            lastName: "",
            firstName: "",
            email: "",
            password: "",
            password2: "",
            errors: {},          // Store error data from the backend here
            isAuthorized: false, // If auth is successful, set this to `true`
            isLoading: false,    // Set this to `true` if You want to show spinner
            dataSet : [],
            headers: {}
            
           };


class Profile extends React.Component {

 
  state = params;

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

  onUpdate(){

    const {lastName, firstName, email, phoneNumber, password, password2} = this.state;
    const payload = {lastName, firstName, email, phoneNumber, password, matchingPassword: password2};


    axios.post("http://192.168.0.100:8080/user/updateUser",
    payload
    , this.state.headers)
    .then((response) => {
      console.log(response);
      console.log("e bine");
      this.props.navigation.navigate('Acasa');
    })
    .catch((error) => {

       console.log(error);
       console.log("eroare");
       onFailure(error);
    });
  }

  componentDidMount(){

    this.state.headers = Anca()
    console.log("--------------------------------")
    console.log(Anca());
    console.log("--------------------------------")
    axios.get("http://192.168.0.100:8080/user/updateUser",this.state.headers
    )
    
    .then((response) => {
      console.log(response)
      console.log("ok update")
      this.setState({dataSet: response.data})
    })

    .catch((error) => {
      console.log(error)
      console.log("eroare update")
    })

  }

 
  render() {
    const { navigation } = this.props;
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={Images.ProfileBackground}
            style={{ width, height, zIndex: 1 }}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '25%' }}
            >
              <Block flex style={styles.profileCard}>
                <Block middle style={styles.avatarContainer}>
                  <Image
                    source={{ uri: Images.ProfilePicture }}
                    style={styles.avatar}
                  />
                  <Text>{this.state.dataSet.lastName}</Text>
                  <Text>{this.state.dataSet.lastName}</Text>
                  <Text>{this.state.dataSet.lastName}</Text>
                  <Text>{this.state.dataSet.lastName}</Text>
                </Block>
                <Block style={styles.info}>
                  <Block
                    middle
                    row
                    space="evenly"
                    style={{ marginTop: 20, paddingBottom: 24 }}
                  >
                    <Button
                      small
                      style={{ backgroundColor: argonTheme.COLORS.BLACK }}
                    >
                      CONNECT
                    </Button>
                    <Button
                      small
                      style={{ backgroundColor: argonTheme.COLORS.PRIMARY }}
                    >
                      MESSAGE
                    </Button>
                  </Block>
                  <Block row space="between">
                    <Block middle>
                      <Text
                        bold
                        size={18}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >
                        2
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>Postari</Text>
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={18}
                        style={{ marginBottom: 4 }}
                      >
                        10
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>Vizionari</Text>
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={18}
                        style={{ marginBottom: 4 }}
                      >
                        89
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>Comentarii</Text>
                    </Block>
                  </Block>
                </Block>
                <Block flex>
                  <Block middle style={styles.nameInfo}>
                    <Text bold size={28} color="#32325D">
                      Jessica Jones, 27
                    </Text>
                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                      San Francisco, USA
                    </Text>
                  </Block>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Block middle>
                    <Text
                      size={16}
                      color="#525F7F"
                      style={{ textAlign: "center" }}
                    >
                      An artist of considerable range, Jessica name taken by
                      Melbourne …

                    </Text>

                    <Button
                      onPress={() => navigation.navigate('ModificaDateUser')}
                      color="transparent"
                      style={{ backgroundColor: argonTheme.COLORS.PRIMARY }}
                      medium
                      textStyle={{
                        color: "#FFFFFF",
                        fontWeight: "500",
                        fontSize: 19
                      }}
                    >
                      Modifica datele
                    </Button>
                    <Button
                      onPress={() => navigation.navigate('ModificaParola')}
                      color="transparent"
                      style={{ backgroundColor: argonTheme.COLORS.BLACK }}
                      medium
                      textStyle={{
                        color: "#FFFFFF",
                        fontWeight: "500",
                        fontSize: 19
                      }}
                    >
                      Modifica parola
                    </Button>
                  </Block>
                  <Block
                    row
                    style={{ paddingVertical: 14, alignItems: "baseline" }}
                  >
                    <Text bold size={16} color="#525F7F">
                      Apartamente postate
                    </Text>
                  </Block>
                  <Block
                    row
                    style={{ paddingBottom: 20, justifyContent: "flex-end" }}
                  >
                    <Button
                      small
                      color="transparent"
                      textStyle={{ color: argonTheme.COLORS.PRIMARY, fontSize: 12 }}
                    >
                      Vezi tot
                    </Button>
                  </Block>
                </Block>
              </Block>
            </ScrollView>
          </ImageBackground>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height / 2
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  }
});

export default Profile;
