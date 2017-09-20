import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, Button, Image, View } from 'react-native';

import styles from './style';
import GradientHeader from '../GradientHeader/GradientHeader';

/**
 * Splash screen
 * @param  {[string]} props [navigation props received from the Home component.
 * It is used to link SplashScreen to NewGatewayForm.]
 */
const SplashScreen = props => (
  <View style={styles.container}>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent={true}
    />
    <Image
      source={require('./img/lumino.png')}
    />
    <View style={styles.buttonContainer}>
      <Button
        onPress={() => props.navigation.navigate('GatewayForm')}
        color="#FEC006"
        title="Get Started"
      />
    </View>
  </View>
);

SplashScreen.navigationOptions = ({ navigation }) => ({
  header: props => <GradientHeader {...props} />,
  headerTintColor: 'white',
});


SplashScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SplashScreen;
