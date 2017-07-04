import React from 'react';
import {ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GatewayView from './GatewayView';

/**
 * Shows the list of gateways.
 * @param  {array} gateways. Array of gateways data.
 */
const GatewaysList = ({ gateways }) => {
  const gatewaysList = gateways.map((gateway, index) =>
    <GatewayView
      key={index}
      name={gateway.name}
      icon_name={gateway.icon_name}
      icon_color={gateway.icon_color}
    />,
  );

  return (
    <ScrollView style={styles.container}>
      {gatewaysList}
    </ScrollView>
  )
}

/**
 * GatewaysList styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GatewaysList;
