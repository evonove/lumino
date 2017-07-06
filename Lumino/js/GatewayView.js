import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

/**
 * GatewayView styles
 */
const styles = StyleSheet.create({
  gatewayContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  gatewayName: {
    fontSize: 17,
  },
  gatewayConnection: {
    color: '#4CD964',
  },
});

export default GatewayView;
