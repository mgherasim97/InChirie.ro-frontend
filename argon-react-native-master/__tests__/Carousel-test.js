
/**
 * @jest-environment jsdom
 */

import React from 'react';
import Carousel from 'react-native-anchor-carousel';
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
  }
});


describe('Image Carousel rendering', () => {

  it('Renders without crashing', () => {

    const component = shallow(<Carousel />);
  });

  
  it('Renders correct data', () => {
    const component = shallow(<Carousel />);

    expect(component).toMatchSnapshot();
  });

  it('The expected data is shown', () => {
    const component = mount(<Carousel />);

    component.setProps({data: [{"content": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", "title": "Lorem ipsum dolor sit amet", "uri": "https://i.imgur.com/GImvG4q.jpg"}]});
    expect(component.props().data).toEqual([{"content": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...", "title": "Lorem ipsum dolor sit amet", "uri": "https://i.imgur.com/GImvG4q.jpg"}]);
   

    component.unmount();

  });

  it('The given style is used', () => {
    const component = mount(<Carousel />);

    component.setProps({style: styles.carousel});
    expect(component.props().style).toEqual(styles.carousel);

    component.unmount();

  });

  it('The correct item width is used', () => {
    const component = mount(<Carousel />);
    
    const { width } = Dimensions.get('window');

    component.setProps({itemWidth: 3 * width});
    expect(component.props().itemWidth).toEqual(3 * width);

    component.unmount();

  });

  it('The correct container width is used', () => {
    const component = mount(<Carousel />);
    
    const { width } = Dimensions.get('window');

    component.setProps({containerWidth: width});
    expect(component.props().containerWidth).toEqual(width);

    component.unmount();

  });
  
  it('The correct container inActiveOpacity is used', () => {
    const component = mount(<Carousel />);
    
    const { width } = Dimensions.get('window');

    component.setProps({inActiveOpacity: 3});
    expect(component.props().inActiveOpacity).toEqual(3);

    component.unmount();

  });


});

