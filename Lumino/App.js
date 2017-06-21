import React from 'react';
import { StyleSheet, View } from 'react-native';

import SplashScreen from './js/SplashScreen.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SplashScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6639B6',
    flex: 1,
  },
});
