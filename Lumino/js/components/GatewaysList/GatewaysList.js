import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';

import GatewayView from './GatewayView';

/**
 * Shows the list of gateways.
 * @param {array} [gateways]. Array of gateways data.
 */
const GatewaysList = ({ gateways, onPress }) => {
  const gatewaysList = gateways
    .sort((a, b) => {
      if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return -1;
      }
      if (a.name.toUpperCase() > b.name.toUpperCase()) {
        return 1;
      }
      return 0;
    })
    .map((gateway, index) =>
    <GatewayView
      key={index}
      name={gateway.name}
      status={gateway.status}
      onPress={() => onPress(gateway)}
    />,
  );

  return (
    <ScrollView style={{flex: 1}}>
      {gatewaysList}
    </ScrollView>
  )
}

GatewaysList.propTypes = {
  gateways: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.bool,
  })),
  onPress: PropTypes.func.isRequired,
};

export default GatewaysList;
