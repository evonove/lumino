import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import IconIonic from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './style';


/*
 * Component to make the user choose between two
 * controller types
 */
const ControllerTypeSelector = props => (
  <View>
    <View style={styles.blockHeading}>
      <Text style={styles.textHeading}>TYPE</Text>
    </View>
    <View style={styles.blockFields}>

      <TouchableOpacity
        style={props.type === "switch" ? styles.buttonPressed : styles.button}
        onPress={() => props.onPress('switch')}
      >
        <IconFontAwesome
          name={'toggle-on'}
          color={props.type === "switch" ? "white" : "#42275A"}
          size={40}
        />
        <Text style={props.type === "switch" ? styles.buttonPressedText : styles.buttonText}>Switch</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={props.type === "dimmer" ? styles.buttonPressed : styles.button}
        onPress={() => props.onPress('dimmer')}
      >
        <IconIonic
          style={{ bottom: 5 }}
          name={'ios-git-commit'}
          color={props.type === "dimmer" ? "white" : "#42275A"}
          size={50}
        />
        <Text style={props.type === "dimmer" ? styles.buttonPressedText : styles.buttonText}>Dimmer</Text>
      </TouchableOpacity>
    </View>
  </View>
);


ControllerTypeSelector.propTypes = {
  onPress: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};


export default ControllerTypeSelector;
