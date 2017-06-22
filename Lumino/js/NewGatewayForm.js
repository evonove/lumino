import React from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';

/**
 * Input form component for creating a new gateway.
 */
export default class NewGatewayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: ''}
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
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
            onPress={() => { Alert.alert('You tapped the button!')}}
            color="#FEC006"
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
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
  }
});
