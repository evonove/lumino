import React from 'react';
import PropTypes from 'prop-types';
import { Slider, Switch, View, Text } from 'react-native';
import { Picker } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';


/*
 * Temperature component, presenting both a switch and a dimmer
 */
const TempComponent = (props) => {
  let heatingIcon = 'ios-power';
  let heatingModeSelection = 0;
  if (props.heatingMode == 1 || props.heatingMode == 102 || props.heatingMode == 110 || props.heatingMode == 103){
    heatingModeSelection = 1;
  }

  if (props.mode == 0) {
    heatingIcon = 'ios-snow';
  } else if (props.heatingMode == 1) {
    heatingIcon = 'ios-flame';
  } else if (props.heatingMode == 102 || props.heatingMode == 202) {
    heatingIcon = 'ios-alert-outline';
  } else if (props.heatingMode == 210 || props.heatingMode == 110) {
    heatingIcon = 'ios-hand-outline';
  } else if (props.heatingMode == 103 || props.heatingMode == 203) {
    heatingIcon = 'ios-power';
  }

  return (
    <View>
      <View style={styles.controllerTemp}>
        <Slider
          style={styles.slider}
          disabled={props.mode != 110 && props.mode != 210}
          minimumTrackTintColor="#42275A"
          onValueChange={props.onPointTempChange}
          value={props.pointTemp}
          step={0.5}
          minimumValue={0}
          maximumValue={50}
        />
        <Text>Point temp: {props.pointTemp ? `${props.pointTemp.toFixed(1)}°C` : "Reading..."}</Text>
        <Text>Actual temp: {props.temp ? `${props.temp.toFixed(1)}°C` : "Reading..."}</Text>
        <Icon name={heatingIcon} size={28} color={'#8e8e93'} />
      </View>

      <Picker mode="dropdown" selectedValue={props.mode} onValueChange={props.onModeChange}>
        <Picker.Item label={"Protection"} value={props.heatingModeSelection == 0 ? 202 : 102} />
        <Picker.Item label={"Automatic"} value={props.heatingModeSelection == 0 ? 1 : 0} />
        <Picker.Item label={"Manual"} value={props.heatingModeSelection == 0 ? 210 : 110} />
        <Picker.Item label={"Off"} value={props.heatingModeSelection == 0 ? 203 : 103} />
      </Picker>

    </View>
  );
};

export default TempComponent;

