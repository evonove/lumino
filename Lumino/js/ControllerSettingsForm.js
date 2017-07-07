import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View }
from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * Input form component for configuring a controller.
 * Picker component contains mocked values.
 */
export default class ControllerSettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: ''}
  }

  render() {
    const headings = {
      settings: 'settings',
      gateway: 'gateway',
    }

    return (
      <View style={styles.container}>
        <View style={styles.blockHeading}>
          <Text style={styles.textHeading}>{headings.settings.toUpperCase()}</Text>
        </View>
        <View style={styles.blockFields}>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            onChangeText={(text) => this.setState({text})}
          />
          <View style={styles.fieldDivider}></View>
          <TextInput
            style={styles.textInput}
            placeholder="Code"
            onChangeText={(text) => this.setState({text})}
          />
        </View>
        <View style={styles.blockHeading}>
          <Text style={styles.textHeading}>{headings.gateway.toUpperCase()}</Text>
        </View>
        <View style={styles.blockSelect}>
          <Text style={styles.textSelect}>Gateway</Text>
          <TouchableOpacity style={styles.buttonSelectItem}
            onPress={() => { Alert.alert('Match the gateway')}}
          >
            <Text style={styles.textItemSelected}>Office</Text>
            <Icon
              style={styles.iconSelectItem}
              name={'ios-arrow-forward'}
              color={'#CECED2'}
              size={24}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

/**
 * ControllerSettingsForm styles
 */
const palette = {
  background: '#FFF',
  settings: '#8E8E93',
  lines: '#CECED2',
}

const sizes = {
  primaryFontSize: 17,
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
  },
  textInput: {
    height: sizes.fieldHeight,
    paddingHorizontal: 20,
  },
  fieldDivider: {
    backgroundColor: palette.lines,
    height: 0.5,
    marginLeft: 20,
  },
  blockSelect: {
    alignItems: 'center',
    backgroundColor: palette.background,
    borderBottomWidth: 0.5,
    borderColor: palette.lines,
    borderTopWidth: 0.5,
    flexDirection: 'row',
    height: sizes.fieldHeight,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  textSelect: {
    fontSize: sizes.primaryFontSize,
  },
  buttonSelectItem: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconSelectItem: {
    marginLeft: 8,
    top: 2,
  },
  textItemSelected: {
    color: palette.settings,
    fontSize: sizes.primaryFontSize,
  },
});
