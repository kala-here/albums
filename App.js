import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => (
    <div><Header /></div>
  );

AppRegistry.registerComponent('albums', () => App);
