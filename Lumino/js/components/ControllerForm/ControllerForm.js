import React from 'react';
import { Field } from 'redux-form'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';
import WrappedTextInput from '../WrappedTextInput/WrappedTextInput';

/**
 * Input form component for configuring a controller.
 * Picker component contains mocked values.
 */
let ControllerSettingsForm = props => (
  <View style={styles.container}>
    <View style={styles.blockHeading}>
      <Text style={styles.textHeading}>SETTINGS</Text>
    </View>
    <View style={styles.blockFields}>
      <Field
        component={WrappedTextInput}
        style={styles.textInput}
        placeholder="Name"
        name="name"
      />
      <View style={styles.fieldDivider}></View>
      <Field
        component={WrappedTextInput}
        style={styles.textInput}
        placeholder="Code"
        name="code"
      />
    </View>
    <View style={styles.blockHeading}>
      <Text style={styles.textHeading}>GATEWAY</Text>
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


export default ControllerSettingsForm;
