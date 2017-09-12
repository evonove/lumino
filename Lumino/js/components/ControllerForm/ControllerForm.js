import React from 'react';
import { Field } from 'redux-form'
import { Alert, Text, TextInput, PickerIOS, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';
import WrappedTextInput from '../WrappedTextInput/WrappedTextInput';
import WrappedPicker from '../WrappedPicker/WrappedPicker';


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
        name="name"
        placeholder="Name"
        component={WrappedTextInput}
        style={styles.textInput}
      />
      <View style={styles.fieldDivider}></View>
      <Field
        name="zone_code"
        placeholder="Zone Code"
        component={WrappedTextInput}
        style={styles.textInput}
      />
      <Field
        name="id_code"
        placeholder="ID Code"
        component={WrappedTextInput}
        style={styles.textInput}
      />
    </View>
    <View style={styles.blockHeading}>
      <Text style={styles.textHeading}>GATEWAY</Text>
    </View>
    <View style={styles.blockFields}>
      <Field
        name="gateway"
        component={ WrappedPicker }
        mode="dropdown"
        children={props.gateways}
      />
    </View>
  </View>
)

export default ControllerSettingsForm;
