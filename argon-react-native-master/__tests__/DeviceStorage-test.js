/**
 * @jest-environment jsdom
 */

import React from 'react';
import deviceStorage from '../services/deviceStorage';
import { mount, shallow, render } from 'enzyme';

// import jsdom from 'jsdom'
// const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
// global.document = doc
// global.window = doc.defaultView


describe('Device Storage function testing', () => {

  it('The expected data waited and processed', async () => {

    const data = await deviceStorage.saveItem(10, 10)

    expect(data).toBe();

  });

    ///this fails because ASYNCWAIT is deprecated
  it('The fetch fails with an error', async () => {

    expect.assertions(1);
    
    try {
      const data = await deviceStorage.saveItem(10, 10)
      
      // it gets to this assertion if it works 
      expect(1).toEqual(1);

    } catch (e) {
      expect(e).toMatch('error');
    }
  });

});

