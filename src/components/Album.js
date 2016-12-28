import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Linking,
  Text,
  Image,
} from 'react-native';
import axios from 'axios';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

axios.defaults.baseURL = 'https://rallycoding.herokuapp.com';

class AlbumList extends Component {
  constructor() {
    super();
    this.state = {
      album: [],
    };
  }

  componentWillMount() {
    axios
    .get('/api/music_albums')
    .then(response => this.setState({ album: response.data[0] }));
  }

  render() {
    console.log();
    return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image
            source={{ uri: this.state.album.image }}
            style={styles.thumbnailStyle}
          />
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>{ this.state.album.title }</Text>
          <Text>{ this.state.album.artist }</Text>
          <Text>Format: Audio CD</Text>
          <Text>4.5 out of 5 stars</Text>
        </View>
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(this.state.album.url)}>
          Buy now - $7.00
        </Button>
      </CardSection>
    </Card>
    );
  }
}

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  headerText: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 100,
    width: 100,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  songImage: {
    height: 300,
    width: null,
    flex: 1,
  }
});


export default AlbumList;
