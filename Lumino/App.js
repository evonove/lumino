import React from 'react';
import { Button, StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GatewaysList from './js/GatewaysList';
import NewGatewayForm from './js/NewGatewayForm';
import ControllerSettings from './js/ControllerSettings';
import ControllersList from './js/ControllersList';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';


/**
 * Gateways mocked data
 */
const gateways = [
  {
    name: 'Gateway #1',
    icon_name: 'ios-checkmark',
    icon_color: '#4CD964',
  },
  {
    name: 'Gateway #2',
    icon_name: 'ios-close',
    icon_color: '#FF3B30',
  },
  {
    name: 'Gateway #3',
    icon_name: 'ios-close',
    icon_color: '#FF3B30',
  },
];

/**
 * Controllers mocked data
 */
const controllers = [
  {
    name: 'Controller #1',
    type: 'dimmable',
    code: '80930',
    gateway: 'Gateway #1',
  },
  {
    name: 'Controller #2',
    type: 'switch',
    code: '34987',
    gateway: 'Gateway #3',
  },
];


/**
 * The screen which contains the gateways list.
 * It passes down the gateways mocked data.
 */
const GatewaysScreen = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle='light-content' />
      <GatewaysList gateways={gateways} />
    </View>
  )
}
GatewaysScreen.navigationOptions = ({ navigation }) => ({
  title: 'Gateways',
  headerStyle: {backgroundColor: '#42275A'},
  headerTintColor: 'white',
  headerRight: <Button
                 title="Add"
                 color="white"
                 onPress={() => navigation.navigate('NewGatewayForm')}
               />,
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name={'ios-expand'}
      size={26}
      color={tintColor}
    />
  ),
});

/**
 * The screen which contains the controllers list.
 * It passes down the gateways mocked data.
 */
const ControllersScreen = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle='light-content' />
      <ControllersList controllers={controllers} />
    </View>
  )
}
ControllersScreen.navigationOptions = ({ navigation }) => ({
  title: 'Controllers',
  headerStyle: {backgroundColor: '#42275A'},
  headerTintColor: 'white',
  headerRight: <Button
                 title="Add"
                 color="white"
                 onPress={() => navigation.navigate('ControllerSettings')}
               />,
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name={'ios-options-outline'}
      size={26}
      color={tintColor}
    />
  ),
});


/**
 * Tab navigation configuration.
 */
const HomeScreen = TabNavigator({
  GatewaysScreen: {screen: GatewaysScreen},
  ControllersScreen: {screen: ControllersScreen},
}, {
  tabBarOptions: {
    activeTintColor: '#42275A',
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
