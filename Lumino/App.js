import React from 'react';
import { StyleSheet } from 'react-native';
import SplashScreen from './js/SplashScreen';
import GatewaysList from './js/GatewaysList';
import NewGatewayForm from './js/NewGatewayForm';
import ControllerSettings from './js/ControllerSettings';
import ControllersList from './js/ControllersList';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';

/**
 * Route configuration.
 */
const App = StackNavigator({
  Home: {
    screen: TabNavigator({
      GatewaysList: {screen: GatewaysList},
      ControllersList: {screen: ControllersList},
    })
  },
  GatewaysList: {screen: GatewaysList},
  NewGatewayForm: {screen: NewGatewayForm},
  ControllerSettings: {screen: ControllerSettings},
  ControllersList: {screen: ControllersList},
});

/**
 * Home styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});

export default App;
