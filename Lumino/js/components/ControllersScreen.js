import React from 'react';
import { Button, StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import GradientHeader from './GradientHeader';
import ControllerSettings from './ControllerSettings';
import ControllersList from './ControllersList';

/**
 * Controllers mocked data
 */
const controllers = [
  {
    name: 'Meeting Room',
    type: 'dimmable',
    code: '80930',
    gateway: 'Gateway #1',
  },
  {
    name: 'Developer Room',
    type: 'switch',
    code: '34987',
    gateway: 'Gateway #3',
  },
];



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
  header: (props) => <GradientHeader {...props} />,
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


export default ControllersScreen;
