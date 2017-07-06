import React from 'react';
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
  gateways: React.PropTypes.arrayOf(React.PropTypes.shape({
    index: React.PropTypes.number,
    name: React.PropTypes.string,
    status: React.PropTypes.string,
  })),
};

export default GatewaysList;
