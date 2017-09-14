import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import styles from './style';

/**
 * View of a single gateway.
 * @param  {string} [name]. The gateway's name.
 * @param  {string} [status]. The status of the gateway's connection.
 */
const GatewayView = ({ name, status, networkStatus, onPress }) => {
  let text = '';
  let style = {};

  if (!status) {
    text = 'Disabled';
  } else if (networkStatus === 'Unreachable') {
    text = networkStatus;
    style = styles.gatewayConnectionError;
  } else if (networkStatus === 'Reachable') {
    text = networkStatus;
    style = styles.gatewayConnection;
  } else {
    text = 'Connecting';
    style = style.gatewayConnecting;
  }

  return (
    <TouchableOpacity style={styles.gatewayContainer} onPress={onPress} >
      <Text style={styles.gatewayName} >{name}</Text>
      <Text style={style}>{text}</Text>
    </TouchableOpacity>
  );
};

GatewayView.propTypes = {
  networkStatus: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default GatewayView;
