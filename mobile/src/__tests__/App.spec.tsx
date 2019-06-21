/**
 * @format
 */
import React from 'react';
import * as renderer from 'react-test-renderer';
import { render } from 'react-native-testing-library';
import App from './../../App';

it('renders correctly', () => {
  const rendered = renderer.create(<App />);
});
