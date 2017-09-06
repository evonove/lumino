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
const palette = {
  background: '#FFF',
  lines: '#CECED2',
  success: '#4CD964',
}

const sizes = {
  primaryFontSize: 17,
  secondaryFontSize: 15,
  fieldHeight: 44,
}

const styles = StyleSheet.create({
  gatewayContainer: {
    alignItems: 'center',
    backgroundColor: palette.background,
    borderBottomWidth: 0.5,
    borderColor: palette.lines,
    flex: 1,
    flexDirection: 'row',
    height: sizes.fieldHeight,
    justifyContent: 'space-between',
    marginTop: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  gatewayName: {
    fontSize: sizes.primaryFontSize,
  },
  gatewayConnection: {
    color: palette.success,
    fontSize: sizes.secondaryFontSize,
  },
});

export default GatewayView;
