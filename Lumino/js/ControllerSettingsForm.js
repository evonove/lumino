import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

/**
 * Input form component for configuring a controller.
 */
export default class ControllerSettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: ''}
  }
  render() {
    return (
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Code"
          onChangeText={(text) => this.setState({text})}
        />
      </View>
    )
  }
}

/**
 * ControllerSettingsForm styles
 */
const styles = StyleSheet.create({
  formContainer: {
    alignItems: 'stretch',
    flex: 1,
  },
  textInput: {
    color: '#FFFFFF',
    height: 40,
  }
});
