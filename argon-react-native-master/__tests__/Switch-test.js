/**
 * @jest-environment jsdom
 */

import React from 'react';
import MkSwitch from '../components/Switch.js';
import { Platform } from 'react-native';
import { shallow } from 'enzyme';
import argonTheme from '../constants/Theme';

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



describe('Image Carousel rendering', () => {

  it('Renders without crashing', () => {

    const component = shallow(<MkSwitch />);
  });

  
  it('Renders correct data', () => {
    const component = shallow(<MkSwitch />);

    expect(component).toMatchSnapshot();
  });


  it('The expected thumbcolor is shown', () => {
    const component = shallow(<MkSwitch />);

    const thumbColor = Platform.OS === 'ios' ? null :
      Platform.OS === 'android' && value ? argonTheme.COLORS.SWITCH_ON : argonTheme.COLORS.SWITCH_OFF;
    
    expect(component.find('Switch').props().thumbColor).toEqual(thumbColor);

    // component.unmount();
  });


  it('The expected thumbcolor is shown', () => {
    const component = shallow(<MkSwitch />);

    const ios_backgroundColorTEST=argonTheme.COLORS.SWITCH_OFF
    
    expect(component.find('Switch').props().ios_backgroundColor).toEqual(ios_backgroundColorTEST);

    // component.unmount();
  });

  it('The given track color is used', () => {
    const component = shallow(<MkSwitch />);

    const trackColorTEST={ false: argonTheme.COLORS.SWITCH_ON, true: argonTheme.COLORS.SWITCH_ON }

    expect(component.find('Switch').props().trackColor).toEqual(trackColorTEST);

    // component.unmount();
  });

});

