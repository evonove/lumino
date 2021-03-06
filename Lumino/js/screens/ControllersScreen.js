import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import isEqual from 'lodash.isequal';

import GradientHeader from '../components/GradientHeader/GradientHeader';
import HeaderButton from '../components/HeaderButton/HeaderButton';
import ControllersList from '../components/ControllersList/ControllersList';
import { readLightStatus } from '../openwebnet';


/**
 * Controllers list screen
 */
class ControllersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.checkControllers = this.checkControllers.bind(this);
    this.refreshing = false;
  }

  checkControllers(controllers=[], gateways=[], dispatch) {
    this.refreshing = true;
    // Call the function that will poll gateways statuses
    controllers.forEach(
      c => readLightStatus(dispatch, c, gateways.filter(g => g.id === c.gateway)[0])
    );
    this.refreshing = false;
  }

  // If the controllers are edited we clear the previous updates
  // that brings with them controllers information
  // and start a new one
  componentWillReceiveProps(nextProps) {
    if (
      !isEqual(this.props.controllers, nextProps.controller) ||
      !isEqual(this.props.gateways, nextProps.gateways)
    ) {
      clearInterval(this.controllersInterval)
      this.controllersInterval = setInterval(
        () => this.checkControllers(nextProps.controllers, nextProps.gateways, nextProps.dispatch),
        5000
      );
    }
  }

  componentDidMount() {
    this.controllersInterval = setInterval(this.checkControllers, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.controllersInterval);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <ControllersList
          controllers={this.props.controllers}
          disabledControllers={this.props.disabledControllers}
          onControllerChange={this.props.onControllerChange}
          onPress={this.props.controllerDetail}
          onRefresh={this.checkControllers}
          refreshing={this.refreshing}
        />
      </View>
    );
  }
}

ControllersScreen.propTypes = {
  controllers: PropTypes.arrayOf(PropTypes.object).isRequired,
  gateways: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigation: PropTypes.object.isRequired,
  disabledControllers: PropTypes.arrayOf(PropTypes.object).isRequired,
  onControllerChange: PropTypes.func.isRequired,
  controllerDetail: PropTypes.func.isRequired,
};


ControllersScreen.navigationOptions = ({ navigation }) => ({
  title: 'Lights',
  header: props => <GradientHeader {...props} />,
  headerTintColor: 'white',
  headerRight: <HeaderButton text={"Add"} onPress={() => navigation.navigate('ControllerForm')} />,
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name={'ios-bulb'}
      size={26}
      color={tintColor}
    />
  ),
});


const mapStateToProps = (state) => {
  // Filter out inactive gateways
  const activeGatewaysIds = state.gateways.filter(g => g.status && g.networkStatus === 'Reachable').map(g => g.id);
  // Filter out controllers associated to an inactive gateway
  const controllers = state.lightControllers
    .filter(c => activeGatewaysIds.indexOf(c.gateway) !== -1 && c.type !== 'temp') || [];
  const disabledControllers = state.lightControllers
    .filter(c => activeGatewaysIds.indexOf(c.gateway) === -1 && c.type !== 'temp') || [];

  return {
    controllers,
    disabledControllers,
    gateways: state.gateways,
  };
};


const mapDispatchToProps = (dispatch, ownProps) => ({
  onControllerChange: (value, id) => dispatch({ type: 'WRITE_LIGHT_CONTROLLER', value, id }),
  controllerDetail: controller => ownProps.navigation.navigate('ControllerForm', { initialValues: controller }),
});


export default connect(mapStateToProps, mapDispatchToProps)(ControllersScreen);
