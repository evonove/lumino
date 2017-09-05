import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './js/HomeScreen';
import NewGatewayForm from './js/NewGatewayForm';
import ControllerSettings from './js/ControllerSettings';


/**
 * Stack navigation configuration.
 */
const App = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  NewGatewayForm: {
    screen: NewGatewayForm
  },
  ControllerSettings: {
    screen: ControllerSettings
  },
});

export default App;
