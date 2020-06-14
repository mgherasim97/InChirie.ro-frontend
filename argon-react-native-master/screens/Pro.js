import React from 'react';
import { ImageBackground, Image, TouchableHighlight, StyleSheet, StatusBar, Dimensions, Platform, Linking, View, ScrollView, Share} from 'react-native';
// import { Block, Button, Text, theme} from 'galio-framework';
import { Block, Text, Button as GaButton, theme } from "galio-framework";
const { height, width } = Dimensions.get('screen');
import { Images, argonTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";
import { Card } from '../components';
import { Button } from "../components";

import  {useRef} from 'react';
import Carousel from 'react-native-anchor-carousel';
import ImageCarousel from '../components/ImageCarousel';

import * as Permissions from 'expo-permissions'
import getGalleryImageAsync from '../share/getGalleryImageAsync';

const b64 =
  'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

export default class Pro extends React.Component {

  onShare = async () => {
    const uri = "https://nuscocitta.ro/wp-content/uploads/2018/08/Living_-_2592_-_Gospodinov_-_IMG_1523.jpg";

    Share.share(
      {
        title: 'test title',
        url: uri,
      },
      {
        excludedActivityTypes: [
          // 'com.apple.UIKit.activity.PostToWeibo',
          // 'com.apple.UIKit.activity.Print',
          // 'com.apple.UIKit.activity.CopyToPasteboard',
          // 'com.apple.UIKit.activity.AssignToContact',
          // 'com.apple.UIKit.activity.SaveToCameraRoll',
          // 'com.apple.UIKit.activity.AddToReadingList',
          // 'com.apple.UIKit.activity.PostToFlickr',
          // 'com.apple.UIKit.activity.PostToVimeo',
          // 'com.apple.UIKit.activity.PostToTencentWeibo',
          // 'com.apple.UIKit.activity.AirDrop',
          // 'com.apple.UIKit.activity.OpenInIBooks',
          // 'com.apple.UIKit.activity.MarkupAsPDF',
          // 'com.apple.reminders.RemindersEditorExtension',
          // 'com.apple.mobilenotes.SharingExtension',
          // 'com.apple.mobileslideshow.StreamShareService',
          // 'com.linkedin.LinkedIn.ShareExtension',
          // 'pinterest.ShareExtension',
          // 'com.google.GooglePlus.ShareExtension',
          // 'com.tumblr.tumblr.Share-With-Tumblr',
          // 'net.whatsapp.WhatsApp.ShareExtension', //WhatsApp
        ],
      }
    );
  };

  onLinkToInstagramIOS = async () => {
    const uri = await getGalleryImageAsync();
    const encodedURL = encodeURIComponent(uri);
    const instagramURL = `instagram://library?AssetPath=${encodedURL}`;
    return Linking.openURL(instagramURL);
  };

  onSubToYoutube = async () => {
    const instagramURL = `https://youtu.be/f75IBP8j_e0`;
    return Linking.openURL(instagramURL);
  };

  onOpenApp = async () => {
    /* A good list for iOS: https://ios.gadgethacks.com/news/always-updated-list-ios-app-url-scheme-names-0184033/ */

    const settings = 'app-settings://';
    const notes = 'mobilenotes://';
    const clashOfClans = 'clashofclans://';

    const snapchat = Platform.select({
      ios: 'snapchat://add/mihai.gherasim',
      default: 'https://snapchat.com/add/mihai.gherasim',
    });

    return Linking.openURL(snapchat);

  };


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

      renderEdit = () => {
            return (
                  <View>
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
                      EDITEAZA
                    </Button>
                    <Button
                      small
                      style={{ backgroundColor: argonTheme.COLORS.PRIMARY }}
                    >
                      STERGE
                    </Button>
                    </Block>
                  </Block>

              
                  </View>
            );

      };

  renderShare = () => {
            return (
                  <Block>
                  <View style={styles.container1}>
                  <Text style={styles.text} onPress={this.onShare}>
                        Share
                  </Text>
                  <Text style={styles.text} onPress={this.onLinkToInstagramIOS}>
                         Link to instagram
                  </Text>
                  <Text style={styles.text} onPress={this.onSubToYoutube}>
                         Turul apartamentului
                  </Text>
                  <Text style={styles.text} onPress={this.onOpenApp}>
                   Cine e gras?
                  </Text>
                  </View>
                  </Block>
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
                              {this.renderEdit()}
                              {this.renderShare()}
                        </ScrollView>
                  </Block>
            );
      }
  }

  const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor: '#2C2F34', 
    marginTop:1
  },
  container1: {
    width: '100%',
//     height: '100%',
    backgroundColor: argonTheme.COLORS.PRIMARY,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: argonTheme.COLORS.BLACK,
    borderRadius: 12,
    overflow: 'hidden',
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
  info: {
    paddingHorizontal: 40
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