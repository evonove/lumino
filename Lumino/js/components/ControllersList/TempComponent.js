import React from 'react';
import PropTypes from 'prop-types';
import { Slider, Switch, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';


/*
 * Temperature component, presenting both a switch and a dimmer
 */
const TempComponent = (props) => {
  let heatingIcon = 'ios-power';
  if (props.heatingMode == 0) {
    heatingIcon = 'ios-snow';
  } else if (props.heatingMode == 1){
    heatingIcon = 'ios-flame';
  }
  return (
    <View style={styles.controllerTemp}>
      <Slider
        style={styles.slider}
        minimumTrackTintColor="#42275A"
        onValueChange={props.onPointTempChange}
        value={props.pointTemp}
        step={0.1}
        minimumValue={0}
        maximumValue={40}
      />
      <Text>Point temp: {props.pointTemp ? `${props.pointTemp.toFixed(1)}°C` : "Reading..."}</Text>
      <Text>Actual temp: {props.temp ? `${props.temp.toFixed(1)}°C` : "Reading..."}</Text>
      <Icon name={heatingIcon} size={28} color={'#8e8e93'} />
    </View>
  );
};

export default TempComponent;
