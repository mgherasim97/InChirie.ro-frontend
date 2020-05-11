import React from 'react';
import { ImageBackground, Image, TouchableHighlight, StyleSheet, StatusBar, Dimensions, Platform, Linking, View, ScrollView} from 'react-native';
// import { Block, Button, Text, theme} from 'galio-framework';
import { Block, Text, Button as GaButton, theme } from "galio-framework";
const { height, width } = Dimensions.get('screen');
import { Images, argonTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";
import { Card } from '../components';


import  {useRef} from 'react';
import Carousel from 'react-native-anchor-carousel';
import ImageCarousel from '../components/ImageCarousel';


export default class Pro extends React.Component {



      renderCarousel = () => {
            return (
                  <View 
                  style={styles.carouselContainer2}>
                              <ImageCarousel/>
                  </View>
            )
      } 

      renderMainCharacteristics = () => {
            return (
                 
                  
                  <View 
                  style={styles.mainCharacteristics}>
                        <Text
                        h2
                        style={{ marginBottom: theme.SIZES.BASE / 2 }}
                        color={argonTheme.COLORS.DEFAULT}>
                              Apartament la cheie Barceni
                        </Text>

                        <Text
                        h3
                        style={{ marginBottom: theme.SIZES.BASE / 2 }}
                        color={argonTheme.COLORS.DEFAULT}>
                        {/* <Icon
                              name="shop"
                              family="ArgonExtra"
                              size={14}
                              color={focused ? "white" : argonTheme.COLORS.PRIMARY}
                        /> */}
                              Locatie
                        </Text>

                        <Text
                        h4
                        style={{ marginBottom: theme.SIZES.BASE / 2 }}
                        color={argonTheme.COLORS.DEFAULT}>
                              Pret
                        </Text>   
                  </View>
                
            )
      }

      renderDetails = () => {
            return (
                  <View>
                        <Text
                        h4
                        style={{ marginBottom: theme.SIZES.BASE / 2 }}
                        color={argonTheme.COLORS.DEFAULT}>
                              Pret
                        </Text>   

                        <Text
                        h4
                        style={{ marginBottom: theme.SIZES.BASE / 2 }}
                        color={argonTheme.COLORS.DEFAULT}>
                              Pret
                        </Text>   

                        <Text
                        h4
                        style={{ marginBottom: theme.SIZES.BASE / 2 }}
                        color={argonTheme.COLORS.DEFAULT}>
                              Pret
                        </Text>   
                  </View>
            )
      }

      renderContact = () => {
            return (
                  <View>
                        <Text
                        h4
                        style={{ marginBottom: theme.SIZES.BASE / 2 }}
                        color={argonTheme.COLORS.DEFAULT}>
                              telefon
                        </Text>   
                  </View>
            )
      }


      renderSocialMedia = () => {
            return (
                  <View>
                        <Block row center space="between">
                              <Block flex middle right>
                                    <GaButton
                                    round
                                    onlyIcon
                                    shadowless
                                    icon="facebook"
                                    iconFamily="Font-Awesome"
                                    iconColor={theme.COLORS.WHITE}
                                    iconSize={theme.SIZES.BASE * 1.625}
                                    color={theme.COLORS.FACEBOOK}
                                    style={[styles.social, styles.shadow]}/>
                              </Block>

                              <Block flex middle center>
                                    <GaButton
                                    round
                                    onlyIcon
                                    shadowless
                                    icon="twitter"
                                    iconFamily="Font-Awesome"
                                    iconColor={theme.COLORS.WHITE}
                                    iconSize={theme.SIZES.BASE * 1.625}
                                    color={theme.COLORS.TWITTER}
                                    style={[styles.social, styles.shadow]}/>
                              </Block>

                              <Block flex middle left>
                                    <GaButton
                                    round
                                    onlyIcon
                                    shadowless
                                    icon="dribbble"
                                    iconFamily="Font-Awesome"
                                    iconColor={theme.COLORS.WHITE}
                                    iconSize={theme.SIZES.BASE * 1.625}
                                    color={theme.COLORS.DRIBBBLE}
                                    style={[styles.social, styles.shadow]}/>
                              </Block>
                        </Block>
                  </View>
            );

      };

      render() {
            return(

                  <Block flex center>
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
                              {this.renderCarousel()}
                              {this.renderMainCharacteristics()}
                              {this.renderDetails()}
                              {this.renderContact()}
                              {this.renderSocialMedia()}
                        </ScrollView>
                  </Block>
            );
      }
  }

  const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#2C2F34', 
    marginTop:20
  },

  carouselContainer2: { 
    width: width,
    height:width*0.56, 
    marginTop:10
  },
  mainCharacteristics:{
    width: width,
    height:width*0.56,
    color:argonTheme.COLORS.PRIMARY,  
    shadowColor: "magenta",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2
  },    
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 44,
    color: argonTheme.COLORS.HEADER
  },
  group: {
    paddingTop: theme.SIZES.BASE * 2
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2
  },
  button: {
    marginBottom: theme.SIZES.BASE,
    width: width - theme.SIZES.BASE * 2
  },
  optionsButton: {
    width: "auto",
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10
  },
  input: {
    borderBottomWidth: 1
  },
  inputDefault: {
    borderBottomColor: argonTheme.COLORS.PLACEHOLDER
  },
  inputTheme: {
    borderBottomColor: argonTheme.COLORS.PRIMARY
  },
  inputTheme: {
    borderBottomColor: argonTheme.COLORS.PRIMARY
  },
  inputInfo: {
    borderBottomColor: argonTheme.COLORS.INFO
  },
  inputSuccess: {
    borderBottomColor: argonTheme.COLORS.SUCCESS
  },
  inputWarning: {
    borderBottomColor: argonTheme.COLORS.WARNING
  },
  inputDanger: {
    borderBottomColor: argonTheme.COLORS.ERROR
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center"
  }
});