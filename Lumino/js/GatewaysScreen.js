import React from 'react';
import { Button, StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GradientHeader from './GradientHeader';
import GatewaysList from './GatewaysList';
import NewGatewayForm from './NewGatewayForm';

/**
 * Gateways mocked data
 */
const gateways = [
  {
    name: 'Office',
    status: 'Connected',
  },
  {
    name: 'Home',
    status: '',
  },
  {
    name: 'Vacation Home',
    status: '',
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
  header: (props) => <GradientHeader {...props} />,
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

export default GatewaysScreen;
