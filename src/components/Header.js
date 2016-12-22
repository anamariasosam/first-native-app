import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Header = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title}> { title } </Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 15,
    color: '#262626'
  },

  container: {
    backgroundColor: 'ghostwhite',
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    paddingTop: 25,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative',
  }
});

export default Header;
