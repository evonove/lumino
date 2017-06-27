import React from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

/**
 * Input form component for configuring a new gateway.
 */
export default class NewGatewayForm extends React.Component {
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
            onChangeText={(text) => this.setState({text})}
          />
        </View>
        <View>
          <Button
            onPress={() => this.props.navigation.navigate('ControllerSettings')}
            title="Create"
          />
        </View>
      </View>
    )
  }
}

/**
 * StackNavigation options for NewGatewayForm component
 */
NewGatewayForm.navigationOptions = {
  title: 'New Gateway',
};

/**
 * NewGatewayForm styles
 */
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  formContainer: {
    alignItems: 'flex-start',
    flex: 1,
  },
  textInput: {
    height: 40,
    width: 200,
  }
});
