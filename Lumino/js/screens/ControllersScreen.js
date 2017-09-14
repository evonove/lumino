import React from 'react';
import { connect } from 'react-redux';
import { Button, StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import GradientHeader from '../components/GradientHeader/GradientHeader';
import ControllersList from '../components/ControllersList/ControllersList';


/**
 * Controllers list screen
 */
const ControllersScreen = (props) => (
  <View style={{flex: 1}}>
    <StatusBar barStyle='light-content' />
    <ControllersList
      controllers={props.controllers}
      disabledControllers={props.disabledControllers}
      onControllerChange={props.onControllerChange}
      onPress={props.controllerDetail}
      viewDisabled={props.viewDisabled}
    />
    <Button
      title={'Disabled controllers'}
      onPress={() => props.navigation.dispatch({ type: 'TOGGLE_DISABLED_CONTROLLERS' })}
    />
  </View>
)


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


const mapStateToProps = (state, props) => {
  // Filter out inactive gateways
  const activeGatewaysIds = state.gateways.filter((g) => g.status && g.networkStatus === 'Reachable').map((g) => g.id);
  // Filter out controllers associated to an inactive gateway
  const controllers = state.controllers.filter((c) => activeGatewaysIds.indexOf(c.gateway) !== -1) || []
  const disabledControllers = state.controllers.filter((c) => activeGatewaysIds.indexOf(c.gateway) === -1) || []

  const viewDisabled = state.config.viewDisabled;

  return {
    controllers,
    disabledControllers,
    viewDisabled,
    gateways: state.gateways
  }
};


const mapDispatchToProps = (dispatch, ownProps) => ({
  onControllerChange: (value, id) => dispatch({type: 'CHANGE_CONTROLLER', value, id}),
  controllerDetail: (controller) => ownProps.navigation.navigate('ControllerForm', { initialValues: controller })
})


export default connect(mapStateToProps, mapDispatchToProps)(ControllersScreen);
