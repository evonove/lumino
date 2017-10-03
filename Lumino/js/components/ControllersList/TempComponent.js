import React from 'react';
import PropTypes from 'prop-types';
import { Slider, Switch, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';


/*
 * Temperature component, presenting both a switch and a dimmer
 */
const TempComponent = (props) => {
  // Adjust value for switch component
  let value = props.value;
  if (props.value === false) {
    value = 0;
  } else if (props.value === true) {
    value = 1;
  }

  return (
    <View style={styles.controllerTemp}>
      <Slider
        style={styles.slider}
        minimumTrackTintColor="#42275A"
        onValueChange={props.onValueChange}
        value={value}
        step={1}
        minimumValue={2}
        maximumValue={10}
      />
      <Text>{props.temp ? `${props.temp}°C` : "Reading temp..."}</Text>
      <Icon name={'ios-snow'} size={28} color={'#8e8e93'} />
      <Switch
        onValueChange={props.onValueChange}
        value={props.value == 0 ? false : true}
      />
      <Icon name={'ios-flame'} size={28} color={'#8e8e93'} />

      <Icon name={'ios-hand-outline'} size={28} color={'#8e8e93'} />
      <Switch
        onValueChange={props.onValueChange}
        value={props.value == 0 ? false : true}
      />
    </View>
  );
};

export default TempComponent;
