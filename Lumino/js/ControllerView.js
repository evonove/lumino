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
      <View style={styles.controllerHeader}>
        <Text style={styles.controllerName}>{name}</Text>
      </View>
      <View style={styles.controllerHeader}>
        <Text style={styles.label}>Switch</Text>
        <Switch />
      </View>
      <View style={styles.dimmerContainer}>
        <Icon
          name={'ios-sunny'}
          size={20}
          color={'grey'}
        />
        <Slider
          style={styles.slider}
        />
        <Icon
          name={'ios-sunny'}
          size={34}
          color={'grey'}
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
    borderColor: 'lightgray',
    flex: 1,
    marginTop: 0.5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  controllerHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 10,
  },
  controllerName: {
    fontSize: 17,
    fontWeight: "600",
  },
  label: {
    fontSize: 17,
  },
  dimmerContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slider: {
    flex: 2,
    marginHorizontal: 10,
  },
});

export default ControllerView;
