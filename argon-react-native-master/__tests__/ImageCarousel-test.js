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
          uri: 'https://i.imgur.com/GImvG4q.jpg',
          title: 'Lorem ipsum dolor sit amet',
          content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
        },
        {
          uri: 'https://i.imgur.com/Pz2WYAc.jpg',
          title: 'Lorem ipsum ',
          content: 'Neque porro quisquam est qui dolorem ipsum '
        },
        {
          uri: 'https://i.imgur.com/IGRuEAa.jpg',
          title: 'Lorem ipsum dolor',
          content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
        },
        {
          uri: 'https://i.imgur.com/fRGHItn.jpg',
          title: 'Lorem ipsum dolor',
          content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet'
        },
        {
          uri: 'https://i.imgur.com/WmenvXr.jpg',
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

