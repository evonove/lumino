import React from 'react';
import { Image, View } from 'react-native';
import { Header } from 'react-navigation';

import styles from './style';


/**
 * Custom Header with gradient as background image.
 */
const GradientHeader = props => (
  <View>
    <Image
      style={ styles.gradient }
      source={ require('./header-gradient.png') }
      resizeMode="cover"
    />
    <Header {...props} style={{ backgroundColor: 'transparent' }} />
  </View>
);

export default GradientHeader;
