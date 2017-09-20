import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, RefreshControl } from 'react-native';

import GatewayView from './GatewayView';
import styles from './style';

/**
 * Shows the list of gateways.
 * @param {array} [gateways]. Array of gateways data.
 */
const GatewaysList = ({ gateways, onPress, onRefresh, refreshing }) => {
  const gatewaysList = gateways
    .sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
    .map(gateway => (
      <GatewayView
        key={gateway.id}
        name={gateway.name}
        status={gateway.status}
        networkStatus={gateway.networkStatus}
        onPress={() => onPress(gateway)}
      />
    ));

  const showTip = gateways.length === 0;

  return (
    <ScrollView
      style={{ flex: 1 }}
      refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing} />}
    >
      <View style={showTip ? {} : { display: 'none' } } >
        <View style={styles.blockHeading}>
          <Text style={styles.textHeading}>Press 'Add' to add your first gateway</Text>
        </View>
      </View>
      {gatewaysList}
    </ScrollView>
  );
};

GatewaysList.propTypes = {
  gateways: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.bool,
  })).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default GatewaysList;
