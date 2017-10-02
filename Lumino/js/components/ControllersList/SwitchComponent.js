import React from 'react';
import PropTypes from 'prop-types';
import { Text, Switch, View } from 'react-native';

import styles from './style';


/*
 * Switch component, presenting only a switch
 */
const SwitchComponent = props => (
  <View style={styles.controllerSwitch}>
    <Text style={styles.switchLabel}>Switch</Text>
    <Switch
      onValueChange={props.onValueChange}
      value={props.value}
    />
  </View>
);

SwitchComponent.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  onValueChange: PropTypes.func,
};


export default SwitchComponent;
