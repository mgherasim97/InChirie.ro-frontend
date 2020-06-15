/**
 * @jest-environment jsdom
 */

import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import { mount, shallow } from 'enzyme';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

// import jsdom from 'jsdom'
// const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
// global.document = doc
// global.window = doc.defaultView

var jsdom = require('jsdom');
const { JSDOM } = jsdom;

const { document } = (new JSDOM('')).window;
global.document = document;

// const React = require('react')
// const Inregistrare = require('../screens/Inregistrare')
// const renderer = require('react-test-renderer')

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


describe('Image Carousel rendering', () => {

  it('Renders without crashing', () => {

    const component = shallow(<ImageCarousel />);
  });

  
  it('Renders correct data', () => {
    const component = shallow(<ImageCarousel />);

    expect(component).toMatchSnapshot();
  });


  it('The expected data is shown', () => {
    const component = shallow(<ImageCarousel />);

    expect(component.find('Carousel').props().data).toEqual([
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
]);

    //component.unmount();
  });


  it('The given style is used', () => {
    const component = shallow(<ImageCarousel />);

    expect(component.find('Carousel').props().style).toEqual(styles.carousel);

    // component.unmount();
  });


  it('The correct item width is used', () => {
    const component = shallow(<ImageCarousel />);
    
    const { width } = Dimensions.get('window');

    expect(component.find('Carousel').props().itemWidth).toEqual(0.7 * width);

    // component.unmount();
  });


  it('The correct container width is used', () => {
    const component = shallow(<ImageCarousel />);
    
    const { width } = Dimensions.get('window');

    expect(component.find('Carousel').props().containerWidth).toEqual(width - 10);

    // component.unmount();
  });
  

  it('The correct container inActiveOpacity is used', () => {
    const component = shallow(<ImageCarousel />);

    expect(component.find('Carousel').props().inActiveOpacity).toEqual(0.3);

    // component.unmount();
  });
  
});

