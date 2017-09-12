import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import styles from './style';

/**
 * View of a single gateway.
 * @param  {string} [name]. The gateway's name.
 * @param  {string} [status]. The status of the gateway's connection.
 */
const GatewayView = ({ name, status, onPress }) => {
  const text = status ? <Text style={styles.gatewayConnection}>Active</Text> : <Text>Inactive</Text>
  return (
    <TouchableOpacity style={styles.gatewayContainer} onPress={onPress} >
      <Text style={styles.gatewayName} >{name}</Text>
      {text}
    </TouchableOpacity>
  )
}

GatewayView.propTypes = {
  name: PropTypes.string,
  status: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

export default GatewayView;
