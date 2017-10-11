import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Slider, Switch, View, Text, Picker, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconIonic from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './style';


/*
 * Temperature component, presenting both a switch and a dimmer
 */
const TempComponent = (props) => {
  let heatingIcon = 'ios-power-outline';
  let heatingModeSelection = 0;
  if (props.heatingMode == 1 || props.heatingMode == 102 || props.heatingMode == 110 || props.heatingMode == 103){
    heatingModeSelection = 1;
  }

  if (props.mode == 0) {
    heatingIcon = 'ios-snow-outline';
  } else if (props.heatingMode == 1) {
    heatingIcon = 'ios-flame-outline';
  } else if (props.heatingMode == 102 || props.heatingMode == 202) {
    heatingIcon = 'ios-alert-outline';
  } else if (props.heatingMode == 210 || props.heatingMode == 110) {
    heatingIcon = 'ios-hand-outline';
  } else if (props.heatingMode == 103 || props.heatingMode == 203) {
    heatingIcon = 'ios-power-outline';
  }

  return (
    <View>
      <View style={styles.temperatureSignal}>
        <Text style={styles.temperatureSignalText}>Actual temp:</Text>
        <Text style={styles.temperatureSignalText}>{props.temp ? `${props.temp.toFixed(1)}°C` : "Reading..."}</Text>
      </View>
      <View style={styles.fieldDivider} />
      <View style={styles.controllerTemp}>
        <View style={styles.temperatureDimmerContainer}>
          <View style={styles.temperatureDimmer}>
            <Icon
              name={'ios-thermometer'}
              size={28}
              color={'#8e8e93'}
            />
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
            <Icon
              name={'ios-thermometer-outline'}
              size={28}
              color={'#8e8e93'}
            />
          </View>
          <Text style={styles.pointTemp}>Point temp: {props.pointTemp ? `${props.pointTemp.toFixed(1)}°C` : "Reading..."}</Text>
        </View>
        <View style={styles.fieldDivider} />
      </View>

      <View style={styles.temperatureOptionsContainer}>
        <TouchableOpacity
          style={styles.temperatureOption}
          onPress={() => { Alert.alert('You tapped the button!')}}
        >
          <Icon
            name={'ios-flame-outline'}
            color={'#42275A'}
            size={28}
          />
          <Text style={styles.temperatureOptionText}>Locked</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.temperatureOptionSelected}
          onPress={() => { Alert.alert('You tapped the button!')}}
        >
          <Icon
            name={'ios-alert-outline'}
            color={'white'}
            size={28}
          />
          <Text style={styles.temperatureOptionTextSelected}>Auto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.temperatureOption}
          onPress={() => { Alert.alert('You tapped the button!')}}
        >
          <Icon
            name={'ios-hand-outline'}
            color={'#42275A'}
            size={28}
          />
          <Text style={styles.temperatureOptionText}>Manual</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.temperatureOption}
          onPress={() => { Alert.alert('You tapped the button!')}}
        >
          <Icon
            name={'ios-power-outline'}
            color={'#42275A'}
            size={28}
          />
          <Text style={styles.temperatureOptionText}>Off</Text>
        </TouchableOpacity>
      </View>

      {/* TODO: Remove native picker */}
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

