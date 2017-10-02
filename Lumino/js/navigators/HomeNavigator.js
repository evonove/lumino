import { TabNavigator, TabBarBottom } from 'react-navigation';

import GatewaysScreen from '../screens/GatewaysScreen';
import ControllersScreen from '../screens/ControllersScreen';
import TemperatureScreen from '../screens/TemperatureScreen';


/**
 * Tab navigation configuration.
 */
const HomeNavigator = TabNavigator(
  {
    ControllersScreen: {
      screen: ControllersScreen,
    },
    TemperatureScreen: {
      screen: TemperatureScreen,
    },
    GatewaysScreen: {
      screen: GatewaysScreen,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#42275A',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
  },
);

export default HomeNavigator;
