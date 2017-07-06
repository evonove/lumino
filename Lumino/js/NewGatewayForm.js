import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

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
    // Form block headings
    const headings = {
      info: 'info',
      settings: 'settings',
    }

    return (
      <View style={styles.container}>
        <View>
          <View style={styles.blockHeading}>
            <Text style={styles.textHeading}>{headings.info.toUpperCase()}</Text>
          </View>
          <View style={styles.blockFields}>
            <TextInput
              style={styles.textInput}
              tintColor="red"
              placeholder="Name"
              onChangeText={(text) => this.setState({text})}
            />
          </View>
        </View>
        <View>
          <View style={styles.blockHeading}>
            <Text style={styles.textHeading}>{headings.settings.toUpperCase()}</Text>
          </View>
          <View style={styles.blockFields}>
            <TextInput
              style={styles.textInput}
              placeholder="IP Address"
              onChangeText={(text) => this.setState({text})}
            />
            <View style={styles.fieldDivider}></View>
            <TextInput
              style={styles.textInput}
              placeholder="Port"
              onChangeText={(text) => this.setState({text})}
            />
            <View style={styles.fieldDivider}></View>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(text) => this.setState({text})}
            />
          </View>
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
  },
  blockHeading: {
    paddingBottom: 8,
    paddingHorizontal: 20,
    paddingTop: 18,
  },
  textHeading: {
    color: 'grey',
  },
  blockFields: {
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderColor: 'lightgrey',
    borderTopWidth: 0.5,
  },
  textInput: {
    height: 46,
    paddingHorizontal: 20,
  },
  fieldDivider: {
    backgroundColor: 'lightgrey',
    height: 0.5,
    marginLeft: 20,
  },
});
