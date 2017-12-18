import React, { Component } from 'react';
import { View, Text } from 'react-native';

// creating a class allows for lifecycle methods
class AlbumList extends Component {
  // componentWillMount runs right before content is loaded to the string
  // ^this makes componentWillMount the perfect place to call for needed data
  componentWillMount() {
    // ASYNC HTTP Request to get albums from the API.
    // eslint-disable-next-line
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response));
    // .then((response) => response.json())
    // .then((responseData) => this.setState({ albums: responseData }));
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
