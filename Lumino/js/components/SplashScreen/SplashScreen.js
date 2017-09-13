import React from 'react';
import { Button, Image, View } from 'react-native';

import styles from './style';

/**
 * Splash screen
 * @param  {[string]} props [navigation props received from the Home component.
 * It is used to link SplashScreen to NewGatewayForm.]
 */
const SplashScreen = (props) => {
  const { navigate } = props.navigation;

  return (
    <View style={styles.container}>
      <Image
        source={require('./img/lumino.png')}
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigate('GatewayForm')}
          color="#FEC006"
          title="Get Started"
        />
      </View>
    </View>
  )
}

export default SplashScreen;
