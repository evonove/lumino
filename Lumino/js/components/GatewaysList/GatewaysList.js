import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import GatewayView from './GatewayView';

/**
 * Shows the list of gateways.
 * @param {array} [gateways]. Array of gateways data.
 */
const GatewaysList = ({ gateways }) => {
  const gatewaysList = gateways.map((gateway, index) =>
    <GatewayView
      key={index}
      name={gateway.name}
      status={gateway.status}
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
    status: PropTypes.string,
  })),
};

export default GatewaysList;
