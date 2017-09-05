import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import HomeScreen from '../components/HomeScreen';
import NewGatewayForm from '../components/NewGatewayForm';
import ControllerSettings from '../components/ControllerSettings';

/**
 * Stack navigation configuration.
 */
export const AppNavigator = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  NewGatewayForm: {
    screen: NewGatewayForm
  },
  ControllerSettings: {
    screen: ControllerSettings
  },
});


const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  nav: state.nav,
  gateways: state.gateways,
  controllers: state.controllers,
});



export default connect(mapStateToProps)(AppWithNavigationState);
