import React from 'react';
import { Slider, StyleSheet, Switch, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
          size={20}
          color={'silver'}
        />
        <Slider
          style={styles.slider}
          minimumTrackTintColor="#42275A"
        />
        <Icon
          name={'ios-sunny'}
          size={34}
          color={'silver'}
        />
      </View>
    </View>
  )
}

ControllerView.propTypes = {
  name: React.PropTypes.string,
};

/**
 * ControllerView styles
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderColor: 'silver',
    borderTopWidth: 0.5,
    flex: 1,
    marginTop: 14,
  },
  controllerName: {
    borderBottomWidth: 0.5,
    borderColor: 'silver',
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  controllerNameText: {
    fontWeight: '600',
  },
  controllerSwitch: {
    alignItems: 'center',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  switchLabel: {
    color: 'silver',
    fontSize: 17,
  },
  fieldDivider: {
    backgroundColor: 'silver',
    height: 0.5,
    marginLeft: 20,
  },
  controllerDimmer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  slider: {
    flex: 2,
    marginHorizontal: 10,
  },
});

export default ControllerView;
