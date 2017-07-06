import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

/**
 * Input form component for configuring a gateway.
 */
export default class NewGatewayForm extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'New Gateway',
    headerStyle: {backgroundColor: '#42275A'},
    headerTintColor: 'white',
    headerRight: <Button
                   onPress={() => navigation.goBack()}
                   title="Save"
                   color="white"
                 />
  });

  constructor(props) {
    super(props);
    this.state = { text: ''}
  }

  render() {
    return (
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
          secureTextEntry={true}
          onChangeText={(text) => this.setState({text})}
        />
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
    paddingHorizontal: 20,
  },
  textInput: {
    height: 40,
  }
});
