import React from 'react';
import { ImageBackground, Image, TouchableHighlight, StyleSheet, StatusBar, Dimensions, Platform, Linking, View} from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import { Images, argonTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";


import  {useRef} from 'react';
import Carousel from 'react-native-anchor-carousel';
import ImageCarousel from '../components/ImageCarousel';


export default class Pro extends React.Component {
  render() {
    return(
     <View>
     <View style={styles.carouselContainer2}>
            <ImageCarousel/>
     </View>
     
      <Text
            h1
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
      >
            Apartament la cheie Barceni
      </Text>
      <Text
            h2
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
      >
      {/* <Icon
            name="shop"
            family="ArgonExtra"
            size={14}
            color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          /> */}
            Locatie
      </Text>
      <Text
            h3
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
      >
            Pret
      </Text>   

      
      </View>  
    );
  }}

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
});