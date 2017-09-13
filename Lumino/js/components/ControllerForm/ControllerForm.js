import React from 'react';
import { Field } from 'redux-form'
import { Text, View } from 'react-native';

import styles from './style';
import TextInput from '../WrappedComponents/TextInput';
import Picker from '../WrappedComponents/Picker';

/**
 * Input form component for configuring a controller.
 */
const ControllerSettingsForm = props => (
  <View style={styles.container}>

    <View style={styles.blockHeading}>
      <Text style={styles.textHeading}>SETTINGS</Text>
    </View>

    <View style={styles.blockFields}>
      <Field
        name="name"
        placeholder="Name"
        component={TextInput}
        style={styles.textInput}
      />
      <View style={styles.fieldDivider}></View>
      <Field
        name="zone_code"
        placeholder="Zone Code"
        component={TextInput}
        style={styles.textInput}
      />
      <Field
        name="id_code"
        placeholder="ID Code"
        component={TextInput}
        style={styles.textInput}
      />
    </View>

    <View style={styles.blockHeading}>
      <Text style={styles.textHeading}>GATEWAY</Text>
    </View>

    <View style={styles.blockFields}>
      <Field
        name="gateway"
        component={ Picker }
        mode="dropdown"
        children={props.gateways}
      />
    </View>
  </View>
)

export default ControllerSettingsForm;
