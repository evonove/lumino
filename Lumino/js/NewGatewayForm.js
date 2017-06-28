import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

/**
 * Input form component for configuring a gateway.
 */
export default class NewGatewayForm extends React.Component {
  static navigationOptions = {
    title: 'New Gateway',
  };

  constructor(props) {
    super(props);
    this.state = { text: ''}
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            style={styles.textInput}
            placeholder="IP Address"
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Port"
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => this.setState({text})}
          />
        </View>
        <View>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Create"
          />
        </View>
      </View>
    )
  }
}

/**
 * NewGatewayForm styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  formContainer: {
    alignItems: 'stretch',
    flex: 1,
  },
  textInput: {
    height: 40,
  }
});
