import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import AlbumList from './components/AlbumList';
import Album from './components/Album';

const RouterComponent = () => (
  <Router
    sceneStyle={{ paddingTop: 65 }}
    navigationBarStyle={styles.viewStyle}
    titleStyle={styles.textStyle}
  >
    <Scene key="list" component={AlbumList} title="🎶Albums 🎶" initial />
    <Scene key="album" component={Album} title="Details 🎧" />
  </Router>
);

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
  textStyle: {
    fontSize: 20,
  }
};

export default RouterComponent;
