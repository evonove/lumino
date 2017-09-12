import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import GatewayView from './GatewayView';

/**
 * Shows the list of gateways.
 * @param {array} [gateways]. Array of gateways data.
 */
const GatewaysList = ({ gateways, onPress }) => {
  const gatewaysList = gateways.map((gateway, index) =>
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
};

export default GatewaysList;
