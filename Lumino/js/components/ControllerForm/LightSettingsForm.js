import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Text, View } from 'react-native';

import styles from './style';
import TextInput from '../WrappedComponents/TextInput';
import Picker from '../WrappedComponents/Picker';

/**
 * Input form component for configuring a controller.
 */
const LightSettingsForm = props => (
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
      <View style={styles.fieldDivider} />
      <Field
        name="idCode"
        placeholder="Where code"
        component={TextInput}
        style={styles.textInput}
        keyboardType={'numeric'}
      />
    </View>

    <View style={styles.blockHeading}>
      <Text style={styles.textHeading}>GATEWAY</Text>
    </View>

    <View style={styles.blockFields}>
      <Field
        name="gateway"
        component={Picker}
        mode="dropdown"
      >
        {props.gateways}
      </Field>
    </View>
  </View>
)



LightSettingsForm.propTypes = {
  gateways: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LightSettingsForm;
