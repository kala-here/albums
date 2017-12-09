// Import libraries for making component
import React from 'react';
import { Text } from 'react-native';

// Make a component
const Header = () => {
  const { textStyle } = styles;
  return <Text style={textStyle}>Header</Text>;
};

const styles = {
  textStyle: {
    fontSize: 20
  }
}
// Make the component available to other parts of the app
