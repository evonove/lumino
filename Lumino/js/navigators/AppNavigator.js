import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import HomeNavigator from './HomeNavigator';
import GatewayForm from '../screens/GatewayForm';
import ControllerForm from '../screens/ControllerForm';


/**
 * Stack navigation configuration.
 */
export const AppNavigator = StackNavigator({
  Home: {
    screen: HomeNavigator
  },
  GatewayForm: {
    screen: GatewayForm
  },
  ControllerForm: {
    screen: ControllerForm
  },
});


const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={addNavigationHelpers({ dispatch, state: nav })}
  />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
