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




const { width } = Dimensions.get('window');

const data = [
  {
    uri: 'https://r-cf.bstatic.com/images/hotel/max1024x768/101/101927297.jpg',
    title: 'Lorem ipsum dolor sit amet',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
  },
  {
    uri: 'https://q-cf.bstatic.com/images/hotel/max1024x768/133/133278998.jpg',
    title: 'Lorem ipsum ',
    content: 'Neque porro quisquam est qui dolorem ipsum '
  },
  {
    uri: 'https://q-xx.bstatic.com/xdata/images/hotel/840x460/118956071.jpg?k=167a5892e4f98e7cc358d922c16d5bb9c8860efc3e8771e426c08055fe043c04&o=',
    title: 'Lorem ipsum dolor',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
  },
  {
    uri: 'https://q-cf.bstatic.com/images/hotel/max1024x768/171/171770259.jpg',
    title: 'Lorem ipsum dolor',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet'
  },
  {
    uri: 'https://q-xx.bstatic.com/xdata/images/hotel/840x460/200051570.jpg?k=52c15a2aa674672a1440bd1d596e57f918b2fbdc0c942b6a5add5a6dc0f4a165&o=',
    title: 'Lorem ipsum ',
    content: 'Neque porro quisquam est qui dolorem ipsum quia dolor '
  }
];

export default class ImageCarousel extends Component {
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
      </TouchableOpacity>
    );
  };

  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: '#141518'
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