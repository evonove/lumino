import React from 'react';
import PropTypes from 'prop-types';
import { Slider, Switch, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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

/**
 * View of a single controller
 */
const ControllerView = (props) => {
  // Set Switch or Dimmer component
  let child;
  if (props.type === 'switch') {
    child = (
      <SwitchComponent
        onValueChange={props.onControllerChange}
        value={props.value == 0 ? false : true}
      />
    );
  } else {
    child = (
      <DimmerComponent
        onValueChange={props.onControllerChange}
        value={props.value}
      />
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.controllerName} onPress={props.onPress} >
        <Text
          style={props.disabled ? styles.controllerNameTextDisabled : styles.controllerNameText}
        >
          {props.name.toUpperCase()}
        </Text>
        <Text
          style={props.disabled ? styles.gatewayNameTextDisabled : styles.gatewayNameText}
        >
          {props.gatewayName}
        </Text>
      </TouchableOpacity>
      {child}
    </View>
  );
};

ControllerView.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  disabled: PropTypes.bool.isRequired,
  onControllerChange: PropTypes.func,
  onPress: PropTypes.func.isRequired,
  gatewayName: PropTypes.string.isRequired,
};


export default ControllerView;
