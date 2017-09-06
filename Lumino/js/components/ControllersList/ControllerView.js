import React from 'react';
import { Slider, StyleSheet, Switch, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';


/**
 * View of a single controller
 * @param {string} [name]. The controller's name.
 */
const ControllerView = ({ name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.controllerName}>
        <Text style={styles.controllerNameText}>{name.toUpperCase()}</Text>
      </View>
      <View style={styles.controllerSwitch}>
        <Text style={styles.switchLabel}>Switch</Text>
        <Switch />
      </View>
      <View style={styles.fieldDivider}></View>
      <View style={styles.controllerDimmer}>
        <Icon
          name={'ios-sunny'}
          size={18}
          color={'#8e8e93'}
        />
        <Slider
          style={styles.slider}
          minimumTrackTintColor="#42275A"
        />
        <Icon
          name={'ios-sunny'}
          size={28}
          color={'#8e8e93'}
        />
      </View>
    </View>
  )
}

ControllerView.propTypes = {
  name: React.PropTypes.string,
};


export default ControllerView;
