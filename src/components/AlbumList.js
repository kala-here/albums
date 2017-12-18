import React, { Component } from 'react';
import { View, Text } from 'react-native';

// creating a class allows for lifecycle methods
class AlbumList extends Component {
  // componentWillMount runs right before content is loaded to the string
  // ^this makes componentWillMount the perfect place to call for needed data
  componentWillMount() {
    console.log('componentWillMount in AlbumsList');
  }
  render() {
    return (
      <View>
      <Text>Album List!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
