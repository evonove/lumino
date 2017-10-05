import React from 'react';
import PropTypes from 'prop-types';
import { Slider, Switch, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';
import SwitchComponent from './SwitchComponent';
import DimmerComponent from './DimmerComponent';
import TempComponent from './TempComponent';


/**
 * View of a single controller
 */
const ControllerView = (props) => {
  // Set Switch, Dimmer or Temperature component
  let child;
  if (props.type === 'switch') {
    child = (
      <SwitchComponent
        onValueChange={props.onControllerChange}
        value={props.value == 0 ? false : true}
      />
    );
  } else if (props.type === 'dimmer') {
    child = (
      <DimmerComponent
        onValueChange={props.onControllerChange}
        value={props.value}
      />
    );
  } else if (props.type === 'temp') {
    child = (
      <TempComponent
        onPointTempChange={props.onPointTempChange}
        onModeChange={props.onModeChange}
        mode={props.mode}
        temp={props.actualTemp}
        heatingMode={props.heatingMode}
        pointTemp={props.pointTemp}
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
