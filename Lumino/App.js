import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import GatewaysList from './js/GatewaysList';
import NewGatewayForm from './js/NewGatewayForm';
import ControllerSettings from './js/ControllerSettings';
import ControllersList from './js/ControllersList';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';

/**
 * Tab navigation configuration.
 */
const HomeScreen = TabNavigator({
  GatewaysList: {screen: GatewaysList},
  ControllersList: {screen: ControllersList},
}, {
  tabBarOptions: {
    activeTintColor: '#5856D6',
  }
});

/**
 * Stack navigation configuration.
 */
const App = StackNavigator({
  Home: { screen: HomeScreen },
  NewGatewayForm: {screen: NewGatewayForm},
  ControllerSettings: {screen: ControllerSettings},
});

export default App;
