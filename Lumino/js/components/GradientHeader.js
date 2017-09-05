import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Header } from 'react-navigation';

/**
 * Custom Header with gradient as background image.
 */
const GradientHeader = props => (
  <View>
    <Image
      style={styles.gradient}
      source={require('../img/header-gradient.png')}
      resizeMode="cover"
    />
    <Header {...props} style={{ backgroundColor: 'transparent' }} />
  </View>
);

/**
 * GatewayView styles
 */
const palette = {
  primary: '#42275A',
}

const styles = StyleSheet.create({
  gradient: {
    backgroundColor: palette.primary,
    height: 100 + '%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: 100 + '%',
  }
})

export default GradientHeader;
