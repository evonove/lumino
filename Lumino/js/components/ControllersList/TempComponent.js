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
  let activeMode = 'automatic';
  let heatingIcon = 'ios-snow-outline';
  let heatingModeSelection = 0;
  if (props.heatingMode == 1 || props.heatingMode == 102 || props.heatingMode == 110 || props.heatingMode == 103){
    heatingModeSelection = 1;
  }

  if (props.mode == 0) {
    heatingIcon = 'ios-snow-outline';
    activeMode = 'automatic';
  } else if (props.heatingMode == 1) {
    heatingIcon = 'ios-flame-outline';
    activeMode = 'automatic';
  } else if (props.heatingMode == 102 || props.heatingMode == 202) {
    activeMode = 'protection';
  } else if (props.heatingMode == 210 || props.heatingMode == 110) {
    activeMode = 'manual';
  } else if (props.heatingMode == 103 || props.heatingMode == 203) {
    activeMode = 'off';
  }

  return (
    <View>
      <View style={styles.temperatureSignal}>
        <Text style={styles.temperatureSignalText}>Actual temperature:</Text>
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
          style={activeMode === 'protection' ? styles.temperatureOptionSelected : styles.temperatureOption}
          onPress={() => props.onModeChange(props.heatingModeSelection == 0 ? 202 : 102)}
        >
          <Icon
            name={'ios-alert-outline'}
            color={activeMode === 'protection' ? 'white' : '#42275A'}
            size={28}
          />
          <Text
            style={activeMode === 'protection' ? styles.temperatureOptionTextSelected : styles.temperatureOptionText}
          >
            Protection
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={activeMode === 'automatic' ? styles.temperatureOptionSelected : styles.temperatureOption}
          onPress={() => props.onModeChange(props.heatingModeSelection == 0 ? 1 : 0)}
        >
          <Icon
            name={heatingIcon}
            color={activeMode === 'automatic' ? 'white' : '#42275A'}
            size={28}
          />
          <Text
            style={activeMode === 'automatic' ? styles.temperatureOptionTextSelected : styles.temperatureOptionText}
          >
            Auto
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={activeMode === 'manual' ? styles.temperatureOptionSelected : styles.temperatureOption}
          onPress={() => props.onModeChange(props.heatingModeSelection == 0 ? 210 : 110)}
        >
          <Icon
            name={'ios-hand-outline'}
            color={activeMode === 'manual' ? 'white' : '#42275A'}
            size={28}
          />
          <Text
            style={activeMode === 'manual' ? styles.temperatureOptionTextSelected : styles.temperatureOptionText}
          >
            Manual
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={activeMode === 'off' ? styles.temperatureOptionSelected : styles.temperatureOption}
          onPress={() => props.onModeChange(props.heatingModeSelection == 0 ? 203 : 103)}
        >
          <Icon
            name={'ios-power-outline'}
            color={activeMode === 'off' ? 'white' : '#42275A'}
            size={28}
          />
          <Text
            style={activeMode === 'off' ? styles.temperatureOptionTextSelected : styles.temperatureOptionText}
          >
            Off
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default TempComponent;

