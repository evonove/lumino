import { TabNavigator, TabBarBottom } from 'react-navigation';

import GatewaysScreen from '../screens/GatewaysScreen';
import ControllersScreen from '../screens/ControllersScreen';


/**
 * Tab navigation configuration.
 */
const HomeNavigator = TabNavigator(
  {
    ControllersScreen: {
      screen: ControllersScreen,
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
