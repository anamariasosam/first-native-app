import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

axios.defaults.baseURL = 'https://rallycoding.herokuapp.com';

class AlbumList extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
    };
  }

  componentWillMount() {
    axios
    .get('/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} buttonText="Info" />);
  }

  render() {
    console.log(this.state.albums);
    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }
}

export default AlbumList;
