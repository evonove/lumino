import React from 'react';
import { connect } from 'react-redux';

import { Button, StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import GradientHeader from '../components/GradientHeader/GradientHeader';
import ControllersList from '../components/ControllersList/ControllersList';

/**
 * The screen which contains the controllers list.
 * It passes down the gateways mocked data.
 */
const ControllersScreen = (props) => {
  // Filter out controllers that are associated to an inactive gateway
  const activeGatewaysIds = props.gateways.filter((g) => g.status).map((g) => g.id);
  let controllers = props.controllers.filter((c) => activeGatewaysIds.indexOf(c.gateway) !== -1) || []
  controllers = controllers.map((c) => {
    c.gateway_name = props.gateways.filter((g) => g.id === c.gateway)[0].name;
    return c;
  });

  const onControllerChange = (value, id) => props.dispatch({type: 'CONTROLLER_CHANGE', value, id});

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle='light-content' />
      <ControllersList
        controllers={controllers}
        onControllerChange={onControllerChange}
        onPress={
          (controller) => { props.navigation.navigate(
            'ControllerForm',
            { initialValues: controller }
          )}
        }
      />
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
                 onPress={() => navigation.navigate('ControllerForm')}
               />,
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name={'ios-options-outline'}
      size={26}
      color={tintColor}
    />
  ),
});


const mapStateToProps = state => ({
  controllers: state.controllers,
  gateways: state.gateways
});


export default connect(mapStateToProps)(ControllersScreen);
