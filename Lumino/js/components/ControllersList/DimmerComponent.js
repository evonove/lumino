import React from 'react';
import PropTypes from 'prop-types';
import { Slider, Switch, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';


/*
 * Dimmer component, presenting both a switch and a dimmer
 */
const DimmerComponent = (props) => {
  // Adjust value for switch component
  let value = props.value;
  if (props.value === false) {
    value = 0;
  } else if (props.value === true) {
    value = 1;
  }

  return (
    <View>
      <View style={styles.dimmerSwitchContainer}>
        <Text style={styles.switchLabel}>Switch</Text>
        <Switch
          onValueChange={props.onValueChange}
          value={props.value == 0 ? false : true}
        />
      </View>
      <View style={styles.fieldDivider} />
      <View style={styles.dimmerContainer}>
        <Icon
          name={'ios-bulb-outline'}
          size={28}
          color={'#8e8e93'}
        />
        <Slider
          style={styles.slider}
          minimumTrackTintColor="#42275A"
          onValueChange={props.onValueChange}
          value={value}
          step={1}
          minimumValue={2}
          maximumValue={10}
        />
        <Icon name={'ios-bulb'} size={28} color={'#8e8e93'} />
      </View>
    </View>
  );
};

DimmerComponent.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  onValueChange: PropTypes.func,
};

export default DimmerComponent;
