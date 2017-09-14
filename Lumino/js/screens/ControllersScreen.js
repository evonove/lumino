import React from 'react';
import { connect } from 'react-redux';
import { Button, StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import GradientHeader from '../components/GradientHeader/GradientHeader';
import ControllersList from '../components/ControllersList/ControllersList';
import { lightStatus } from '../openwebnet';


/**
 * Controllers list screen
 */
class ControllersScreen extends React.Component {
  componentDidMount() {
    // Add a timer that will poll lights statuses
    this.readLights = setInterval(
      () => this.props.controllers.map(
        (c) => {
          const gateway = this.props.gateways.filter((g) => g.id === c.gateway)[0];
          lightStatus(this.props.navigation.dispatch, c, gateway)
        }
      ),
      1000
    );
  }

  componetWillUnmount() {
    clearInterval(this.readLights);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle='light-content' />
        <ControllersList
          controllers={this.props.controllers}
          disabledControllers={this.props.disabledControllers}
          onControllerChange={this.props.onControllerChange}
          onPress={this.props.controllerDetail}
          viewDisabled={this.props.viewDisabled}
        />
        <Button
          title={'Disabled controllers'}
          onPress={this.props.onToggleDisabled}
        />
      </View>
    )
  }
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


const mapStateToProps = (state, props) => {
  // Filter out inactive gateways
  const activeGatewaysIds = state.gateways.filter((g) => g.status && g.networkStatus === 'Reachable').map((g) => g.id);
  // Filter out controllers associated to an inactive gateway
  const controllers = state.controllers.filter((c) => activeGatewaysIds.indexOf(c.gateway) !== -1) || []
  const disabledControllers = state.controllers.filter((c) => activeGatewaysIds.indexOf(c.gateway) === -1) || []

  const viewDisabled = state.config.viewDisabled;

  return {
    gateways: state.gateways,
    controllers,
    disabledControllers,
    viewDisabled,
    gateways: state.gateways
  }
};


const mapDispatchToProps = (dispatch, ownProps) => ({
  onControllerChange: (value, id) => dispatch({type: 'WRITE_CONTROLLER', value, id}),
  controllerDetail: (controller) => ownProps.navigation.navigate('ControllerForm', { initialValues: controller }),
  onToggleDisabled: () => dispatch({ type: 'TOGGLE_DISABLED_CONTROLLERS' })
})


export default connect(mapStateToProps, mapDispatchToProps)(ControllersScreen);
