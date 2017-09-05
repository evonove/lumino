import React from 'react';
import { TabNavigator } from 'react-navigation';

import GatewaysScreen from './GatewaysScreen';
import ControllersScreen from './ControllersScreen';


/**
 * Tab navigation configuration.
 */
const HomeScreen = TabNavigator(
  {
    GatewaysScreen: {
      screen: GatewaysScreen
    },
    ControllersScreen: {
      screen: ControllersScreen
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#42275A',
    }
  }
);

export default HomeScreen;
