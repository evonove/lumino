import React from 'react';
import { connect } from 'react-redux';
import { Button, StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import GradientHeader from '../components/GradientHeader/GradientHeader';
import GatewaysList from '../components/GatewaysList/GatewaysList';
import GatewayForm from '../components/GatewayForm/GatewayForm';

/**
 * The screen which contains the gateways list.
 * It passes down the gateways mocked data.
 */
const GatewaysScreen = (props) => {
  const gateways = props.gateways || [];
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle='light-content' />
      <GatewaysList gateways={gateways} />
    </View>
  )
}
GatewaysScreen.navigationOptions = ({ navigation, screenProps }) => ({
  title: 'Gateways',
  header: (props) => <GradientHeader {...props} />,
  headerTintColor: 'white',
  headerRight: <Button
                 title="Add"
                 color="white"
                 onPress={() => navigation.navigate('GatewayForm')}
               />,
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name={'ios-expand'}
      size={26}
      color={tintColor}
    />
  ),
});


const mapStateToProps = state => ({
  gateways: state.gateways
});

export default connect(mapStateToProps)(GatewaysScreen);