import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IconIonic from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

/**
 * Controller Type Selector
 */
const ControllerTypeSelector = () => {
  const headings = {
    type: 'type',
  }
  return (
    <View>
      <View style={styles.blockHeading}>
        <Text style={styles.textHeading}>{headings.type.toUpperCase()}</Text>
      </View>
      <View style={styles.blockFields}>
        <TouchableOpacity style={styles.button}
          onPress={() => { Alert.alert('You choose Switch Lights!')}}
        >
          <IconFontAwesome
            name={'toggle-on'}
            color={'#42275A'}
            size={40}
          />
          <Text style={styles.buttonText}>Switch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
          onPress={() => { Alert.alert('You choose Dimmable Lights')}}
        >
          <IconIonic
          style={{bottom: 5}}
            name={'ios-git-commit'}
            color={'#42275A'}
            size={50}
          />
          <Text style={styles.buttonText}>Dimmer</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

/**
 * ControllerTypeSelector styles
 */
const palette = {
  primary: '#42275A',
  background: '#FFF',
  settings: '#8E8E93',
  lines: '#CECED2',
}

const sizes = {
  headingFontSize: 13,
  fieldHeight: 44,
}

const styles = StyleSheet.create({
  blockHeading: {
    top: 20,
    paddingHorizontal: 20,
    height: sizes.fieldHeight,
  },
  textHeading: {
    color: palette.settings,
    fontSize: sizes.headingFontSize,
  },
  blockFields: {
    backgroundColor: palette.background,
    borderBottomWidth: 0.5,
    borderColor: palette.lines,
    borderTopWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: palette.lines,
    borderRadius: 5,
    borderWidth: 0.5,
    height: 100,
    marginVertical: 20,
    paddingVertical: 14,
    width: 100,
  },
  buttonText: {
    color: palette.primary,
  },
});

export default ControllerTypeSelector;
