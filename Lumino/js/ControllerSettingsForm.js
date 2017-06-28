import React from 'react';
import { Picker, StyleSheet, TextInput, View } from 'react-native';

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
    return (
      <View style={styles.formContainer}>
        <View>
          <Picker
            selectedValue={this.state.gateway}
            onValueChange={(itemValue, itemIndex) => this.setState({gateway: itemValue})}>
            <Picker.Item label="Gateway #1" value="Gateway #1" />
            <Picker.Item label="Gateway #2" value="Gateway #2" />
            <Picker.Item label="Gateway #3" value="Gateway #3" />
          </Picker>
        </View>
        <View>
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
