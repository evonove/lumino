import React from 'react';
import PropTypes from 'prop-types';
import { Slider, Switch, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';


/*
 * Temperature component, presenting both a switch and a dimmer
 */
const TempComponent = (props) => {
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
      <Text>Point temp: {props.pointTemp ? `${props.pointTemp}°C` : "Reading..."}</Text>
      <Text>{props.temp ? `${props.temp}°C` : "Reading temp..."}</Text>
      <Icon name={'ios-snow'} size={28} color={'#8e8e93'} />
      <Switch
        onValueChange={props.onHeatingChange}
        value={props.heatingMode == 0 ? false : true}
      />
      <Icon name={'ios-flame'} size={28} color={'#8e8e93'} />

      <Icon name={'ios-hand-outline'} size={28} color={'#8e8e93'} />
      <Switch
        onValueChange={props.onModeChange}
        value={props.manualMode == 0 ? false : true}
      />
    </View>
  );
};

export default TempComponent;
