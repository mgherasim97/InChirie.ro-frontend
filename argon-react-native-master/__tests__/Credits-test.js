/**
 * @jest-environment jsdom
 */

import React from 'react';
import Credits from '../screens/Credits';
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

const { height, width } = Dimensions.get('window');

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


describe('Image Carousel rendering', () => {

  it('Renders without crashing', () => {

    const component = shallow(<Credits />);
  });

  
  it('Renders correct data', () => {
    const component = shallow(<Credits />);

    expect(component).toMatchSnapshot();
  });


  it('The expected data is shown', () => {
    const component = shallow(<Credits />);

    expect(component.find('Carousel').props().data).toEqual([
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
      ]);

    //component.unmount();
  });


  it('The given style is used', () => {
    const component = shallow(<Credits />);

    expect(component.find('Carousel').props().style).toEqual(styles.carousel);

    // component.unmount();

  });


  it('The correct item width is used', () => {
    const component = shallow(<Credits />);
    
    const { width } = Dimensions.get('window');

    expect(component.find('Carousel').props().itemWidth).toEqual(0.7 * width);

    // component.unmount();

  });


  it('The correct container width is used', () => {
    const component = shallow(<Credits />);
    
    const { width } = Dimensions.get('window');

    expect(component.find('Carousel').props().containerWidth).toEqual(width - 10);

    //component.unmount();
  });
  

  it('The correct container inActiveOpacity is used', () => {
    const component = shallow(<Credits />);

    expect(component.find('Carousel').props().inActiveOpacity).toEqual(0.3);

    //component.unmount();
  });

  it('The correct container style is used', () => {
    const component = shallow(<Credits />);

    expect(component.find('View').props().style).toEqual(styles.carouselContainer);

    component.unmount();
  });
  
});

