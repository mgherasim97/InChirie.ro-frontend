import React, { Component, useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
  Alert
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import loadingBlurImage from '../assets/imgs/loading-blur.png';


const { height, width } = Dimensions.get('window');

// const data = [
//   {
//     uri: '../assets/imgs/Luiza_Negru.jpg',
//     title: 'Negru Luiza',
//     content: 'merge cred'
//   },
//   {
//     uri: '../assets/imgs/Daniel_Sava.jfif',
//     title: 'Lorem ipsum ',
//     content: 'Neque porro quisquam est qui dolorem ipsum '
//   },
//   {
//     uri: '../assets/imgs/Mihai_Gherasim.jfif',
//     title: 'Lorem ipsum dolor',
//     content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
//   },
//   {
//     uri: '../assets/imgs/Anca_Stefania_Ilicea.jpg',
//     title: 'Lorem ipsum dolor',
//     content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet'
//   }
// ];

const data = [
  {
    uri: 'https://i.imgur.com/9QlOVC5.jpg',
    title: 'Ilicea Anca Ștefania - "Da-mi bag picioarele!"',
    content: 'Șefa echipei de frontend, nu vrei sa o superi.'
  },
  {
    uri: 'https://i.imgur.com/DN2njLs.jpg',
    title: 'Sava Vasile Daniel - "Noi la MDS când mai lucrăm?"',
    content: 'O minte sclipitoare, coordonator neoficial al proiectului și programator pe backend.'
  },
  {
    uri: 'https://i.imgur.com/yqR5PPp.jpg',
    title: 'Negru Luiza - "Morții lui de laptop!"',
    content: 'Plină de idei, voie bună și dorință de a învăța, programator de backend.'
  },
  {
    uri: 'https://i.imgur.com/VtO3zqE.jpg',
    title: 'Gherasim Mihai - "Acum termin testele... acum..."',
    content: 'Inima echipei, cel mai bun dintre cei mai buni. Sclavul Ancăi pe frontend.'
  }
];

export default class Credits extends Component {
    // constructor(props) {
    //     super(props);
    //     this.modalVisible = false;
    // }
  renderItem = ({ item, index }) => {
    const { uri, title, content } = item;
    
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          this.numberCarousel.scrollToIndex(index);
        }}
      >
        <ImageBackground
          source={{ uri: uri }}
          style={styles.imageBackground}
          loadingIndicatorSource={loadingBlurImage}
        //   onPress={() => {
        //   this.setState({ modalVisible: !modalVisible })
        // }}
        >
        </ImageBackground>

        <View style={styles.lowerContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
        <View
        style={styles.carouselContainer}>
            <Carousel
                style={styles.carousel}
                data={data}
                renderItem={this.renderItem}
                itemWidth={0.7 * width}
                inActiveOpacity={0.3}
                containerWidth={width - 10}
                ref={(c) => {
                this.numberCarousel = c;
                }}
            />
        </View>
    );
  }
};

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: '#141518'
  },
  carouselContainer: {
    width: width,
    height:height*0.8, 
    marginTop:10
  },
  item: {
    borderWidth: 2,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    borderColor: 'white',
    elevation: 3
  },
  imageBackground: {
    flex: 2,
    backgroundColor: '#EBEBEB',
    borderWidth: 1,
    borderColor: 'white'
  }
});