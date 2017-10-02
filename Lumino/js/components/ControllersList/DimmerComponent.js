import React from 'react';
import PropTypes from 'prop-types';
import { Slider, Switch, View } from 'react-native';
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
    <View style={styles.controllerDimmer}>
      <Icon
        name={'ios-sunny'}
        size={18}
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
      <Icon name={'ios-sunny'} size={28} color={'#8e8e93'} />
      <Switch
        onValueChange={props.onValueChange}
        value={props.value == 0 ? false : true}
      />
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
