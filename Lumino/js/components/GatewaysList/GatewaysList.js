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
    .sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
    .map((gateway, index) =>
    <GatewayView
      key={index}
      name={gateway.name}
      status={gateway.status}
      networkStatus={gateway.networkStatus}
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
