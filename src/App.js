import React from 'react';
import {
  View,
} from 'react-native';

import Header from './components/Header';
import Router from './Router';


const App = () => (
  <View style={{ flex: 1 }} >
    <Router />
  </View>
);

export default App;
