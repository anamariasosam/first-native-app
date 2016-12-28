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
  textStyle: {
    fontSize: 20,
    color: '#262626'
  },

  viewStyle: {
    backgroundColor: 'ghostwhite',
    borderBottomWidth: 0,
    height: 65,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
  }
};

export default RouterComponent;
