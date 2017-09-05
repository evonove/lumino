import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';

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
          onPress={() => navigate('NewGatewayForm')}
          color="#FEC006"
          title="Get Started"
        />
      </View>
    </View>
  )
}

/**
 * SplashScreen styles
 */
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    height: 200,
    width: 200
  },
  buttonContainer: {
    paddingTop: 25,
  },
});

export default SplashScreen;
