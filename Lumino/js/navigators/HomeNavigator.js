import React from 'react';
import { TabNavigator } from 'react-navigation';

import GatewaysScreen from '../screens/GatewaysScreen';
import ControllersScreen from '../screens/ControllersScreen';


/**
 * Tab navigation configuration.
 */
const HomeNavigator = TabNavigator(
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

export default HomeNavigator;
