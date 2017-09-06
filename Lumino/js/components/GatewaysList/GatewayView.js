import React from 'react';
import { Text, View } from 'react-native';

import styles from './style';

/**
 * View of a single gateway.
 * @param  {string} [name]. The gateway's name.
 * @param  {string} [status]. The status of the gateway's connection.
 */
const GatewayView = ({name, status}) => {
  return (
    <View
      style={styles.gatewayContainer}>
      <Text style={styles.gatewayName}>{name}</Text>
      <Text style={styles.gatewayConnection}>{status}</Text>
    </View>
  )
}

GatewayView.propTypes = {
  name: React.PropTypes.string,
  status: React.PropTypes.string,
};

export default GatewayView;
