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

/**
 * ControllerView styles
 */
const palette = {
  background: '#FFF',
  settings: '#8E8E93',
  lines: '#CECED2',
}

const sizes = {
  primaryFontSize: 17,
  fieldHeight: 44,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.background,
    borderBottomWidth: 0.5,
    borderColor: palette.lines,
    borderTopWidth: 0.5,
    flex: 1,
    marginTop: 10,
  },
  controllerName: {
    borderBottomWidth: 0.5,
    borderColor: 'silver',
    height: sizes.fieldHeight,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  controllerNameText: {
    fontWeight: '600',
  },
  controllerSwitch: {
    alignItems: 'center',
    height: sizes.fieldHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  switchLabel: {
    fontSize: sizes.primaryFontSize,
  },
  fieldDivider: {
    backgroundColor: palette.lines,
    height: 0.5,
    marginLeft: 20,
  },
  controllerDimmer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: sizes.fieldHeight,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  slider: {
    flex: 2,
    marginHorizontal: 10,
  },
});

export default ControllerView;
