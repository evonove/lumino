import React from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';

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

